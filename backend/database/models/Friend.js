module.exports = (sequelize, DataTypes) => {
    let alias = 'Amigo';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: DataTypes.INTEGER
        },
        viejo_nombre: {
            allowNull: false,
            type: DataTypes.STRING
        },
        nuevo_nombre: {
            allowNull: false,
            type: DataTypes.STRING
        }
    };
    let config = {
        tableName: "my_friends",
        timestamps: false
    }



    const Amigo = sequelize.define(alias, cols, config)
    return Amigo;
}