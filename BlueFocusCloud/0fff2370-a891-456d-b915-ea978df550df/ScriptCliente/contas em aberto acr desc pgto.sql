
select 
p.pessoaid as Codigo,
p.pessoafantasia as Nome,

(
select sum(c1.contapagrecvlrconta) 
 
from contapagrec c1
where c1.contapagreccliforid = p.pessoaid
  and c1.contapagreccliforempid = p.empresapessoasempresaid
  and c1.contapagrecpagrec = 'R'

  and ((c1.contapagrectipcobid = 2) or (c1.contapagrectipcobid = 20))
  
--  and c1.contapagrecdtemissao <= '22/10/2020'
 and c1.contapagrecdtemissao <= :<1/d[1-Data Referencia]
  and (

     c1.contapagrecsituacao = 'A'
  or (

       c1.contapagrecsituacao = 'Q'
--   and c1.contapagrecdtpagamento > '22/10/2020'
    and c1.contapagrecdtpagamento > :<2/d[2-Data Referencia]
))) as Vl_Conta,

(
select sum(lc2.contalancamvalor)

from contalancam lc2

join tipolancamento tpl2 on (tpl2.tipolancamentoempresaid = lc2.contalancamtplancamempid
                         and tpl2.tipolancamentoid = lc2.contalancamtplancamid
                         and tpl2.tipolancamentotipo = 'A')

join contapagrec c2 on (c2.contapagrecnumero = lc2.contapagrecnumero
                   and c2.contapagrecempresaid = lc2.contapagrecempresaid
  and c2.contapagreccliforid = p.pessoaid
  and c2.contapagreccliforempid = p.empresapessoasempresaid
  and c2.contapagrecpagrec = 'R'

  and ((c2.contapagrectipcobid = 2) or (c2.contapagrectipcobid = 20))
  
--  and c2.contapagrecdtemissao <= '22/10/2020'
 and c2.contapagrecdtemissao <= :<3/d[3-Data Referencia]
  and (

     c2.contapagrecsituacao = 'A'
  or (

       c2.contapagrecsituacao = 'Q'
--   and c2.contapagrecdtpagamento > '22/10/2020'
    and c2.contapagrecdtpagamento > :<4/d[4-Data Referencia]
)))

where 
--lc2.contalancamdata <= '22/10/2020'
  lc2.contalancamdata <= :<5/d[5-Data Referencia]

) as vl_Acrescimo,

(
select sum(lc3.contalancamvalor)

from contalancam lc3

join tipolancamento tpl3 on (tpl3.tipolancamentoempresaid = lc3.contalancamtplancamempid
                         and tpl3.tipolancamentoid = lc3.contalancamtplancamid
                         and tpl3.tipolancamentotipo = 'D')

join contapagrec c3 on (c3.contapagrecnumero = lc3.contapagrecnumero
                   and c3.contapagrecempresaid = lc3.contapagrecempresaid
  and c3.contapagreccliforid = p.pessoaid
  and c3.contapagreccliforempid = p.empresapessoasempresaid
  and c3.contapagrecpagrec = 'R'

  and ((c3.contapagrectipcobid = 2) or (c3.contapagrectipcobid = 20))
  
--  and c3.contapagrecdtemissao <= '22/10/2020'
 and c3.contapagrecdtemissao <= :<6/d[6-Data Referencia]
  and (

     c3.contapagrecsituacao = 'A'
  or (

       c3.contapagrecsituacao = 'Q'
--   and c3.contapagrecdtpagamento > '22/10/2020'
    and c3.contapagrecdtpagamento > :<1/d[7-Data Referencia]
)))

where 
--lc3.contalancamdata <= '22/10/2020'
  lc3.contalancamdata <= :<2/d[8-Data Referencia]

) as vl_Desconto,

(
select sum(lc4.contalancamvalor)

from contalancam lc4

join tipolancamento tpl4 on (tpl4.tipolancamentoempresaid = lc4.contalancamtplancamempid
                         and tpl4.tipolancamentoid = lc4.contalancamtplancamid
                         and tpl4.tipolancamentotipo = 'B')

join contapagrec c4 on (c4.contapagrecnumero = lc4.contapagrecnumero
                   and c4.contapagrecempresaid = lc4.contapagrecempresaid
  and c4.contapagreccliforid = p.pessoaid
  and c4.contapagreccliforempid = p.empresapessoasempresaid
  and c4.contapagrecpagrec = 'R'

  and ((c4.contapagrectipcobid = 2) or (c4.contapagrectipcobid = 20))
  
--  and c4.contapagrecdtemissao <= '22/10/2020'
 and c4.contapagrecdtemissao <= :<3/d[9-Data Referencia]
  and (

     c4.contapagrecsituacao = 'A'
  or (

       c4.contapagrecsituacao = 'Q'
--   and c4.contapagrecdtpagamento > '22/10/2020'
    and c4.contapagrecdtpagamento > :<4/d[10-Data Referencia]
)))

where 
--lc4.contalancamdata <= '22/10/2020'
  lc4.contalancamdata <= :<5/d[11-Data Referencia]

and lc4.contalancamtplancamid <> 16

) as vl_Pago,

(
select sum(lc6.contalancamvalor)

from contalancam lc6

join tipolancamento tpl6 on (tpl6.tipolancamentoempresaid = lc6.contalancamtplancamempid
                         and tpl6.tipolancamentoid = lc6.contalancamtplancamid)

join contapagrec c6 on (c6.contapagrecnumero = lc6.contapagrecnumero
                   and c6.contapagrecempresaid = lc6.contapagrecempresaid
  and c6.contapagreccliforid = p.pessoaid
  and c6.contapagreccliforempid = p.empresapessoasempresaid
  and c6.contapagrecpagrec = 'R'

  and ((c6.contapagrectipcobid = 2) or (c6.contapagrectipcobid = 20))
  
--  and c6.contapagrecdtemissao <= '22/10/2020'
 and c6.contapagrecdtemissao <= :<6/d[12-Data Referencia]
  and (

     c6.contapagrecsituacao = 'A'
  or (

       c6.contapagrecsituacao = 'Q'
--   and c6.contapagrecdtpagamento > '22/10/2020'
    and c6.contapagrecdtpagamento > :<1/d[13-Data Referencia]
)))

where 
--lc6.contalancamdata <= '22/10/2020'
  lc6.contalancamdata <= :<2/d[14-Data Referencia]

and lc6.contalancamtplancamid <> 16

) as vl_Atual


from pessoa p

where

(
select count(c5.contapagrecnumero)

from contapagrec c5
where c5.contapagreccliforid = p.pessoaid
  and c5.contapagreccliforempid = p.empresapessoasempresaid
  and c5.contapagrecpagrec = 'R'

  and ((c5.contapagrectipcobid = 2) or (c5.contapagrectipcobid = 20))
  
-- and c5.contapagrecdtemissao <= '22/10/2020'
 and c5.contapagrecdtemissao <= :<4/d[15-Data Referencia]
  and (

     c5.contapagrecsituacao = 'A'
  or (

       c5.contapagrecsituacao = 'Q'
--   and c5.contapagrecdtpagamento > '22/10/2020'
    and c5.contapagrecdtpagamento > :<5/d[16-Data Referencia]
))) >= 1

order by 2;
