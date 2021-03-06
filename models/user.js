module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        gamerTag:DataTypes.STRING,
        platform:DataTypes.STRING,
        activisionId:DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING
    });

    Users.associate = function (models) {
        Users.hasMany(models.Performances, {
            onDelete: "cascade"
        });
        Users.belongsToMany(models.Tournaments,{ through: models.TournamentList });
        Users.belongsToMany(models.Users, 
            {as: 'Friends', through: models.Friendship
        });
    };
    return Users;
};
