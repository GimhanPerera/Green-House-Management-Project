module.exports = (sequelize, DataTypes) => {

    const user = sequelize.define('user', {
       
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
       

        f_name: {
            type: DataTypes.STRING(20),
        },

        l_name: {
            type: DataTypes.STRING(30),
        },

        email: {
            type: DataTypes.STRING,
        },

        password:{
            type:DataTypes.STRING,
        },

        // role:{
        //     type:DataTypes.STRING(30),
        // }, 
    },{
        timestamps: false
    });

    return user;
}