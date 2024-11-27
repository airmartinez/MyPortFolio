import { DataTypes, Sequelize } from "sequelize";

export default class DBManager {
    constructor(path) {
        this.sequelize = new Sequelize({ dialect: "sqlite", storage: path });
    }

 
    async init() {
        return new Promise(async (resolve, reject) => {
            try {
                this.defineModels();

                await this.sequelize.authenticate();
                await this.sequelize.sync();
                
                resolve();
            } catch (error) {
                console.log("Unable to connect to database: ", error);
                reject(error);
            }
        });
    }
    

   
    defineModels() {
        this.userTable = this.sequelize.define("userTable", {
            username: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        });
    }
}
