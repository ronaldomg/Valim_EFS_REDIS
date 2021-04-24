-- VENDAS POR DIA DA SEMANA COM TOTAL E MÉDIA

select 

 p.produtoid as Código, 
 p.produtodescricaoresumida as Descrição,
 f.familiadescricao as Familia,
 p.produtounidadevendaid as UN,
to_char( sum(d.saidaitemquantidade),'9G999G990D000') as QtdeSemana,
to_char(( sum(d.saidaitemquantidade)/7),'9G999G990') as MediaSemana,

(
select 
to_char( sum(ddom.saidaitemquantidade),'9G999G990') as Dom
 from saida d1dom, saidaitem ddom, transacaosaida tdom
 where
                            d1dom.SaidaData                = '14/03/2021'                        
                        and ddom.SaidaEmpresaId            = d1dom.SaidaEmpresaId
                        and ddom.SaidaId                   = d1dom.SaidaId
                        and ddom.SaidaItemLoteProdutoId    = p.produtoid
                        and tdom.transacaosaidaempresaid   = d1dom.saidaempresaid
                        and tdom.transacaosaidacodigo      = d1dom.saidatransacaocodigo
                        and tdom.transacaosaidasnalterasaldo = 'S'
                        and tdom.transacaosaidatipo        in ('1','2','3','4','5','8')
),
(
select 
to_char( sum(dseg.saidaitemquantidade),'9G999G990') as Seg
 from saida d1seg, saidaitem dseg, transacaosaida tseg
 where
                            d1seg.SaidaData                = '15/03/2021'                        
                        and dseg.SaidaEmpresaId            = d1seg.SaidaEmpresaId
                        and dseg.SaidaId                   = d1seg.SaidaId
                        and dseg.SaidaItemLoteProdutoId    = p.produtoid
                        and tseg.transacaosaidaempresaid   = d1seg.saidaempresaid
                        and tseg.transacaosaidacodigo      = d1seg.saidatransacaocodigo
                        and tseg.transacaosaidasnalterasaldo = 'S'
                        and tseg.transacaosaidatipo        in ('1','2','3','4','5','8')
),

(
select 
to_char( sum(dter.saidaitemquantidade),'9G999G990') as Ter
 from saida d1ter, saidaitem dter, transacaosaida tter
 where
                            d1ter.SaidaData                = '16/03/2021'                        
                        and dter.SaidaEmpresaId            = d1ter.SaidaEmpresaId
                        and dter.SaidaId                   = d1ter.SaidaId
                        and dter.SaidaItemLoteProdutoId    = p.produtoid
                        and tter.transacaosaidaempresaid   = d1ter.saidaempresaid
                        and tter.transacaosaidacodigo      = d1ter.saidatransacaocodigo
                        and tter.transacaosaidasnalterasaldo = 'S'
                        and tter.transacaosaidatipo        in ('1','2','3','4','5','8')
),

(
select 
to_char( sum(dqua.saidaitemquantidade),'9G999G990') as Qua
 from saida d1qua, saidaitem dqua, transacaosaida tqua
 where
                            d1qua.SaidaData                = '17/03/2021'                        
                        and dqua.SaidaEmpresaId            = d1qua.SaidaEmpresaId
                        and dqua.SaidaId                   = d1qua.SaidaId
                        and dqua.SaidaItemLoteProdutoId    = p.produtoid
                        and tqua.transacaosaidaempresaid   = d1qua.saidaempresaid
                        and tqua.transacaosaidacodigo      = d1qua.saidatransacaocodigo
                        and tqua.transacaosaidasnalterasaldo = 'S'
                        and tqua.transacaosaidatipo        in ('1','2','3','4','5','8')
),
(
select 
to_char( sum(dqui.saidaitemquantidade),'9G999G990') as Qui
 from saida d1qui, saidaitem dqui, transacaosaida tqui
 where
                            d1qui.SaidaData                = '18/03/2021'                        
                        and dqui.SaidaEmpresaId            = d1qui.SaidaEmpresaId
                        and dqui.SaidaId                   = d1qui.SaidaId
                        and dqui.SaidaItemLoteProdutoId    = p.produtoid
                        and tqui.transacaosaidaempresaid   = d1qui.saidaempresaid
                        and tqui.transacaosaidacodigo      = d1qui.saidatransacaocodigo
                        and tqui.transacaosaidasnalterasaldo = 'S'
                        and tqui.transacaosaidatipo        in ('1','2','3','4','5','8')
),
(
select 
to_char( sum(dsex.saidaitemquantidade),'9G999G990') as Sex
 from saida d1sex, saidaitem dsex, transacaosaida tsex
 where
                            d1sex.SaidaData                = '19/03/2021'                        
                        and dsex.SaidaEmpresaId            = d1sex.SaidaEmpresaId
                        and dsex.SaidaId                   = d1sex.SaidaId
                        and dsex.SaidaItemLoteProdutoId    = p.produtoid
                        and tsex.transacaosaidaempresaid   = d1sex.saidaempresaid
                        and tsex.transacaosaidacodigo      = d1sex.saidatransacaocodigo
                        and tsex.transacaosaidasnalterasaldo = 'S'
                        and tsex.transacaosaidatipo        in ('1','2','3','4','5','8')
),
(
select 
to_char( sum(dsab.saidaitemquantidade),'9G999G990') as Sab
 from saida d1sab, saidaitem dsab, transacaosaida tsab
 where
                            d1sab.SaidaData                = '20/03/2021'                        
                        and dsab.SaidaEmpresaId            = d1sab.SaidaEmpresaId
                        and dsab.SaidaId                   = d1sab.SaidaId
                        and dsab.SaidaItemLoteProdutoId    = p.produtoid
                        and tsab.transacaosaidaempresaid   = d1sab.saidaempresaid
                        and tsab.transacaosaidacodigo      = d1sab.saidatransacaocodigo
                        and tsab.transacaosaidasnalterasaldo = 'S'
                        and tsab.transacaosaidatipo        in ('1','2','3','4','5','8')
),
(
select 
to_char( sum(d30d.saidaitemquantidade/30),'9G999G990') as Media30Dias
 from saida d130d, saidaitem d30d, transacaosaida t30d
 where
                            d130d.SaidaData               >= '14/02/2021'
                        and d130d.SaidaData               <= '13/03/2021'                        
                        and d30d.SaidaEmpresaId            = d130d.SaidaEmpresaId
                        and d30d.SaidaId                   = d130d.SaidaId
                        and d30d.SaidaItemLoteProdutoId    = p.produtoid
                        and t30d.transacaosaidaempresaid   = d130d.saidaempresaid
                        and t30d.transacaosaidacodigo      = d130d.saidatransacaocodigo
                        and t30d.transacaosaidasnalterasaldo = 'S'
                        and t30d.transacaosaidatipo        in ('1','2','3','4','5','8')
),
(
select sp.saldoprodutoqtde as EstAtual
from saldoproduto sp
where
      sp.filialempresaid = d1.saidafilialempid
  and sp.filialid = d1.saidafilialid
  and sp.produtoempresaid = p.produtoempresaid
  and sp.produtoid = p.produtoid
  and sp.loteprodutocombinacao = 'UNICO'
  and sp.saldoprodutodata = 
 (select max(sp2.saldoprodutodata)
    from saldoproduto sp2
    where sp2.produtoid = sp.produtoid)
)

 from saida d1, saidaitem d, produto p, familia f, transacaosaida t

 where
                             d1.SaidaData                >=  :<1/d>[Data Inicial]                      
                        and d1.SaidaData                <= :<1/d>[Data Final]
                        and d.SaidaEmpresaId            = d1.SaidaEmpresaId
                        and d.SaidaId                   = d1.SaidaId
                        and d.SaidaEmpresaId            = p.produtoempresaid
                        and d.SaidaItemLoteProdutoId    = p.produtoid
                        and f.familiaempresaid          = d1.saidaempresaid
                        and f.familiaid                 = p.produtofamiliaid
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
 p.produtoid, 
 p.produtodescricaoresumida,
 f.familiadescricao,
 p.produtounidadevendaid
order by sum(d.saidaitemquantidade) desc                        
;

