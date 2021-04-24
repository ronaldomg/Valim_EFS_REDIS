--ticket medio
select 
-- s.setordescricao as Setor,
-- f.familiadescricao as Familia,
-- p.produtoid as Código, 
-- p.produtodescricaoresumida as Descrição,
-- v.valoratributodescricao as Tamanho,
-- d.saidaitemquantidade as qtde
-- sum(d.saidaitemquantidade) as Qtde_por_Venda,

d1.Saidadataemissao,
v.SaidaVendedorID,
v1.vendedornome,

to_char( sum((d.saidaitemquantidade * d.saidaitemvalorunitario) - d.saidaitemvalordesconto),'9G999G990D99') as vlvenda,

to_char(count(d1.saidaid),'9G999G990') as Numero_Clientes,

to_char( (( sum((d.saidaitemquantidade * d.saidaitemvalorunitario) - d.saidaitemvalordesconto) )
   /
  ( count(d1.saidaid) )),'9G999G990D9999') as Ticket_Medio
 

 from saida d1, saidaitem d, saidavendedor v,
 vendedor v1,
-- produto p, loteproduto l, familia f, setor s, valoratributo v, 
 transacaosaida t

 where
                            d1.SaidaData                >=  :<1/d>[Data Inicial]                      
                        and d1.SaidaData                <= :<1/d>[Data Final]
--                            d1.SaidaData                >= '01/01/2020'                        
--                        and d1.SaidaData                <= '31/07/2020'
                        and  d.saidaitemlotefilialid     = :<2/i>[Filial]
--                        and  d.saidaitemlotefilialid     = 2
                        and d.SaidaEmpresaId            = d1.SaidaEmpresaId
                        and d.SaidaId                   = d1.SaidaId
                        and v.SaidaEmpresaId            = d1.SaidaEmpresaId
                        and v.saidaid                   = d1.saidaid
                        and v1.vendedorEmpresaId        = v.SaidaEmpresaId
                        and v1.vendedorid               = v.SaidaVendedorID
--                        and d.SaidaEmpresaId            = p.produtoempresaid
--                        and d.SaidaItemLoteProdutoId    = p.produtoid
--                        and l.filialempresaid           = d.saidaempresaid
--                        and l.filialid                  = d1.saidafilialid
--                        and l.produtoempresaid          = p.produtoempresaid
--                        and l.produtoid                 = p.produtoid
--                        and l.loteprodutocombinacao     = d.saidaitemlotecombinacao
--                        and v.esquemacodigo             = p.esquemacodigo
--                        and v.atributoesquemacodigo     = p.esquemacodigo
--                        and v.valoratributocodigo       = CAST (SUBSTRING(d.saidaitemlotecombinacao FROM 1 FOR 4) as SMALLINT)
--                        and f.familiaempresaid          = d1.saidaempresaid
--                        and f.familiaid                 = p.produtofamiliaid
--                        and s.setorempresaid            = d1.saidaempresaid
--                        and s.setorid                   = f.setorid
                        and t.transacaosaidaempresaid   = d1.saidaempresaid
                        and t.transacaosaidacodigo      = d1.saidatransacaocodigo
                        and t.transacaosaidasnalterasaldo = 'S'
                        and t.transacaosaidatipo        in ('1','2','3','4','5','8')
------------------------transacaosaidatipo:
--                          1-pre-venda
--                          2-dav
--                          3-cupom fiscal
--                          4-nota de saida normal
--                          5-nota complementar
--                          6-nota de ajuste
--                          7-devolu??o
--                          8-troca
--                          9-ajuste
--                          10-transferencia

group by 
d1.Saidadataemissao,
 v.SaidaVendedorID,
 v1.vendedornome
-- d.saidaitemquantidade
-- s.setordescricao,
 --f.familiadescricao,
-- p.produtoid, 
-- p.produtodescricaoresumida,
-- v.valoratributodescricao
order by 1, 2, 3, 4, 5 desc
;
