import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUrlRegister1686610918631 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "url_register",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true
                    },
                    {
                        name: "shortned_id",
                        type: "int",
                    },
                    {
                        name: "url_basic",
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
                        name: "fk_url_shortned_param",
                        columnNames: ["shortned_id"],
                        referencedTableName: "url_shortned_param",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("url_register")
    }

}
