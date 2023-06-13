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
                        name: "shortned_param",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "created_on",
                        type: "timestamp",
                        default: "now()",
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("url_shortned_param")
    }

}
