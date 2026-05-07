import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Produto {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  codigoBarras: string;

  @Column('decimal')
  preco: number;

  @Column()
  quantidade: number;

  @Column()
  validade: string;

  @Column()
  lote: string;
}