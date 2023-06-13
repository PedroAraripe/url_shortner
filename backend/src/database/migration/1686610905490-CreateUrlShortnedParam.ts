import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUrlShortnedParam1686610905490 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "url_shortned_param",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true
                    },
                    {
                        name: "url_register_id",
                        type: "int",
                    },
                    {
                        name: "shortned_param",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "created_on",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_url_register",
                        columnNames: ["url_register_id"],
                        referencedTableName: "url_register",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("url_shortned_param")
    }

}
