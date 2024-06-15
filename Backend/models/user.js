module.exports = (sequelize, DataTypes) => {

    const user = sequelize.define('user', {
       
        userId: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true,
            defaultValue: '0',
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