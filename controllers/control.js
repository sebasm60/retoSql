const controller = {};

const { cnn_mysql } = require('./../config/database');

controller.index = (req, res) => {
    res.render('login', { error: '' });
}

controller.login = (req, res) => {
    res.render('login', { error: '' });
}

controller.home = (req, res) => {
    res.render('dashboard', { user: '' });
}

controller.dashboard = (req, res) => {
    const user = req.body.user;
    const pass = req.body.pass;

    (user === process.env.DB_USER && pass === process.env.DB_PASS) ?
    res.render('dashboard', { user: user }):
        res.render('login', { error: "Usuario o contraseña no validos." });
}

controller.listVe = (req, res) => {
    cnn_mysql.query(`SELECT * FROM vehiculos`, (err, resultSet) => {
        (err) ? res.status(500).send('Se presento un error'):
            res.render('vehiculos', { data: resultSet });
    });

};

controller.saveVe = async(req, res) => {
    try {
        const {
            nro_placa,
            id_linea,
            modelo,
            fecha_ven_seguro,
            fecha_ven_tecnicomecanica,
            fecha_ven_contratodo,
        } = req.body;

        const rows = await cnn_mysql.promise().execute(`INSERT INTO vehiculos(nro_placa, id_linea, modelo, fecha_ven_seguro,
            fecha_ven_tecnicomecanica, fecha_ven_contratodo) VALUES (?, ?, ?, ?, ?, ?)`, [
            nro_placa, id_linea, modelo, fecha_ven_seguro, fecha_ven_tecnicomecanica, fecha_ven_contratodo
        ]);

        (rows.affectedRows > 0) ? res.json({
            nro_placa: nro_placa,
            id_linea: id_linea,
            modelo: modelo,
            fecha_ven_seguro: fecha_ven_seguro,
            fecha_ven_tecnicomecanica: fecha_ven_tecnicomecanica,
            fecha_ven_contratodo: fecha_ven_contratodo,
        }): res.redirect('vehiculo');
    } catch (e) {
        res.status(500).json({ errorCode: e.err, message: "Error en el servidor." });
    }


};

controller.editVe = (req, res) => {
    const { id } = req.params;

    cnn_mysql.query(`SELECT * FROM vehiculos WHERE nro_placa = ?`, [id], (err, resultSet) => {
        res.render('vehiculo_edit', { data: resultSet[0] });
    });
}

controller.updateVe = (req, res) => {

    const {
        nro_placa,
        id_linea,
        modelo,
        fecha_ven_seguro,
        fecha_ven_tecnicomecanica,
        fecha_ven_contratodo
    } = req.body;

    cnn_mysql.query(`UPDATE vehiculos SET id_linea=?, modelo=?, fecha_ven_seguro=?, 
        fecha_ven_tecnicomecanica=?, fecha_ven_contratodo=? WHERE nro_placa = ?`, [
        id_linea, modelo, fecha_ven_seguro, fecha_ven_tecnicomecanica, fecha_ven_contratodo, nro_placa
    ], (err, resultSet) => {
        res.redirect('/vehiculo');
    });
}

controller.deleteVe = (req, res) => {
    const { id } = req.params;

    cnn_mysql.query(`DELETE FROM vehiculos WHERE nro_placa = ?`, [id], (err, resultSet) => {
        res.redirect('/vehiculo');
    });
};

controller.listLi = (req, res) => {
    cnn_mysql.query(`SELECT * FROM tipo_linea`, (err, resultSet) => {
        (err) ? res.status(500).send('Se presento un error'):
            res.render('tipoLinea', { data: resultSet });
    });

};

controller.saveLi = async(req, res) => {
    try {
        const {
            id_linea,
            desc_linea,
            id_marca,
            activo,
        } = req.body;

        const rows = await cnn_mysql.promise().execute(`INSERT INTO tipo_linea(id_linea, desc_linea, id_marca, activo)
         VALUES (?,?,?,?)`, [id_linea, desc_linea, id_marca, activo]);

        (rows.affectedRows > 0) ? res.json({
            id_linea: id_linea,
            desc_linea: desc_linea,
            id_marca: id_marca,
            activo: activo,
        }): res.redirect('tipoLinea');
    } catch (e) {
        res.status(500).json({ errorCode: e.errno, message: "Error en el servidor." });
    }
};

controller.editLi = (req, res) => {
    const { id } = req.params;

    cnn_mysql.query(`SELECT * FROM tipo_linea WHERE id_linea = ?`, [id], (err, resultSet) => {
        res.render('tipoLinea_edit', { data: resultSet[0] });
    });
}

controller.updateLi = (req, res) => {

    const {
        id_linea,
        desc_linea,
        id_marca,
        activo,
    } = req.body;

    cnn_mysql.query(`UPDATE tipo_linea SET desc_linea=?, id_marca=?, activo=? WHERE id_linea = ?`, [desc_linea, id_marca, activo, id_linea], (err, resultSet) => {
        res.redirect('/tipoLinea');
    });

}

controller.deleteLi = (req, res) => {
    const { id } = req.params;

    cnn_mysql.query(`DELETE FROM tipo_linea WHERE id_linea = ?`, [id], (err, resultSet) => {
        res.redirect('/tipoLinea');
    });
};

controller.listMa = (req, res) => {
    cnn_mysql.query(`SELECT * FROM tipo_marca`, (err, resultSet) => {
        (err) ? res.status(500).send('Se presento un error'):
            res.render('tipoMarca', { data: resultSet });
    });

};

controller.saveMa = async(req, res) => {
    try {
        const {
            id_marca,
            desc_marca,
            activo
        } = req.body;

        const rows = await cnn_mysql.promise().execute(`INSERT INTO tipo_marca(id_marca, desc_marca, activo)
         VALUES (?,?,?)`, [id_marca, desc_marca, activo]);

        (rows.affectedRows > 0) ? res.json({
            id_marca: id_marca,
            desc_marca: desc_marca,
            activo: activo,
        }): res.redirect('tipoMarca');
    } catch (e) {
        res.status(500).json({ errorCode: e.errno, message: "Error en el servidor." });
    }
};

controller.editMa = (req, res) => {
    const { id } = req.params;

    cnn_mysql.query(`SELECT * FROM tipo_marca WHERE id_marca = ?`, [id], (err, resultSet) => {
        res.render('tipoMarca_edit', { data: resultSet[0] });
    });
}

controller.updateMa = (req, res) => {
    const {
        id_marca,
        desc_marca,
        activo
    } = req.body;

    cnn_mysql.query(`UPDATE tipo_marca SET desc_marca=?, activo=? WHERE id_marca = ?`, [desc_marca, activo, id_marca], (err, resultSet) => {
        res.redirect('/tipoMarca');
    });
}

controller.deleteMa = (req, res) => {
    const { id } = req.params;

    cnn_mysql.query(`DELETE FROM tipo_marca WHERE id_marca = ?`, [id], (err, resultSet) => {
        res.redirect('/tipoMarca');
    });
};

module.exports = controller;