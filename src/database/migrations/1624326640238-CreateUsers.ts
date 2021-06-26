import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1624326640238 implements MigrationInterface {

    // criar a tabela de usuários 
    // O up cria a tabela
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "admin",
                        type: "boolean",
                        default: false 
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()" 
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()" 
                    },
                ]
            })
        );
    }

    // O down remove a tabela
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
