import { MigrationInterface, QueryRunner, Table } from "typeorm"

// -- CREATE TABLE user_has_url (
// -- 	id serial PRIMARY KEY,
// -- 	register_id INT NOT NULL,
// -- 	user_id INT NOT NULL,
// -- 	created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
// -- 	CONSTRAINT fk_url_register
// -- 		FOREIGN KEY(register_id) 
// -- 		REFERENCES url_register(register_id),
// -- 	CONSTRAINT fk_user
// -- 		FOREIGN KEY(user_id) 
// -- 		REFERENCES user_register(user_id),
// -- 	UNIQUE(register_id, user_id)
// -- );
    


export class CreateUserHasUrl1686611013820 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user_has_url",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true
                    },
                    {
                        name: "register_id",
                        type: "int",
                    },
                    {
                        name: "user_id",
                        type: "int",
                    },
                    {
                        name: "created_on",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_user",
                        columnNames: ["user_id"],
                        referencedTableName: "user_register",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_url_register",
                        columnNames: ["register_id"],
                        referencedTableName: "url_register",
                        referencedColumnNames: ["id"]
                    },
                ]
            })
        );
    }    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user_has_url")
    }

}
