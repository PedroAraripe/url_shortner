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
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("url_register")
    }

}
