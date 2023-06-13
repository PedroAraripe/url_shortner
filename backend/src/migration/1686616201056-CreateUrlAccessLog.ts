import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUrlAccessLog1686616201056 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "url_access_log",
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
        await queryRunner.dropTable("url_access_log")
    }


}
