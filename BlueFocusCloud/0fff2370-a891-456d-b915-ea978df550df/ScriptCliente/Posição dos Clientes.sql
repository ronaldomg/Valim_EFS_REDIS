select 
p.pessoaid as Codigo,
p.pessoafantasia as Nome,

(
select sum(c1.contapagrecvlrconta) 
from contapagrec c1
where c1.contapagreccliforid = p.pessoaid
  and c1.contapagreccliforempid = p.empresapessoasempresaid
  and c1.contapagrecpagrec = 'R'

  --and c1.contapagrectipcobid between 1 and 9999
  and c1.contapagrectipcobid between :<5/i[Tipo Cobranca Inicial] and :<5/i[Tipo Cobranca Final]
  
--  and c1.contapagrecdtemissao < '01/01/2000'
 and c1.contapagrecdtemissao < :<1/d[Data Inicial]
  and (

     c1.contapagrecsituacao = 'A'
  or (

       c1.contapagrecsituacao = 'Q'
--   and c1.contapagrecdtpagamento >= '01/01/2000'
    and c1.contapagrecdtpagamento >= :<2/d[Data Inicial]
))) as Vl_Aberto,

(
select sum(lc.contalancamvalor)
from contalancam lc
join contapagrec c2 on (c2.contapagrecnumero = lc.contapagrecnumero
                    and c2.contapagrecempresaid = lc.contapagrecempresaid
                    and c2.contapagreccliforid = p.pessoaid
                    and c2.contapagreccliforempid = p.empresapessoasempresaid)
where 

--lc.contalancamdata between '01/01/2020' and '16/10/2020'
lc.contalancamdata between :<3/d[Data Inicial] and :<3/d[Data Final]

  --and c2.contapagrectipcobid between 1 and 9999
  and c2.contapagrectipcobid between :<6/i[Tipo Cobranca Inicial] and :<6/i[Tipo Cobranca Final]

) as Vlr_Juros_Descontos_Pgmtos,

(
select count(lc2.contapagrecnumero)
from contalancam lc2
join contapagrec c3 on (c3.contapagrecnumero = lc2.contapagrecnumero
                    and c3.contapagrecempresaid = lc2.contapagrecempresaid
                    and c3.contapagreccliforid = p.pessoaid
                    and c3.contapagreccliforempid = p.empresapessoasempresaid)
where 

--lc2.contalancamdata between '01/01/2020' and '16/10/2020'
lc2.contalancamdata between :<4/d[Data Inicial] and :<4/d[Data Final]

  --and c3.contapagrectipcobid between 1 and 9999
  and c3.contapagrectipcobid between :<7/i[Tipo Cobranca Inicial] and :<7/i[Tipo Cobranca Final]

) as Qtde

--,(vl_aberto + vlr_juros_descontos_pgmtos ) as vl_total

from pessoa p

--having 3 > 0

order by 5 desc, 2;