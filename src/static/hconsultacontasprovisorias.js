/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:40:3.34
*/
gx.evt.autoSkip = false;
gx.define('hconsultacontasprovisorias', false, function () {
   this.ServerClass =  "hconsultacontasprovisorias" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV13ContaProvisorioEmpresaId=gx.fn.getControlValue("vCONTAPROVISORIOEMPRESAID") ;
      this.AV14ContaProvisorioNumero=gx.fn.getIntegerValue("vCONTAPROVISORIONUMERO",'.') ;
      this.AV20ContaProvisorioNumeroTransf=gx.fn.getIntegerValue("vCONTAPROVISORIONUMEROTRANSF",'.') ;
      this.AV18Diferenca=gx.fn.getDecimalValue("vDIFERENCA",'.',',') ;
   };
   this.Valid_Contapagrecnumero=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(26) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECNUMERO", gx.fn.currentGridRowImpl(26));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocxabconumero=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(26) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCXABCONUMERO", gx.fn.currentGridRowImpl(26));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contapagreccliforid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(26) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECCLIFORID", gx.fn.currentGridRowImpl(26));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocxabcopessoaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(26) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCXABCOPESSOAID", gx.fn.currentGridRowImpl(26));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocxabcoempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(26) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCXABCOEMPRESAID", gx.fn.currentGridRowImpl(26));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contapagrecnumero=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(26) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECNUMERO", gx.fn.currentGridRowImpl(26));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocxabconumero=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(26) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCXABCONUMERO", gx.fn.currentGridRowImpl(26));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocxabcoempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(26) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCXABCOEMPRESAID", gx.fn.currentGridRowImpl(26));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11ho2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15ho2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e16ho2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,14,16,19,21,22,25,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,48];
   this.GXLastCtrlId =48;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",26,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hconsultacontasprovisorias",[],false,1,true,true,0,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(1686,27,"CONTAPAGRECNUMERO","Nº Conta","","ContaPagRecNumero","int",0,"px",8,8,"right",null,[],1686,"ContaPagRecNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1929,28,"LANCAMENTOCXABCONUMERO","Nº Lanç.","","LancamentoCxaBcoNumero","int",0,"px",8,8,"right",null,[],1929,"LancamentoCxaBcoNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1637,29,"CONTAPAGRECCLIFORID","Fornecedor","","ContaPagRecCliForId","int",0,"px",7,7,"right",null,[],1637,"ContaPagRecCliForId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1865,30,"LANCAMENTOCXABCOPESSOAID","Fornecedor","","LancamentoCxaBcoPessoaId","int",0,"px",7,7,"right",null,[],1865,"LancamentoCxaBcoPessoaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Nomefantasia",31,"vNOMEFANTASIA","Nome do Fornecedor","","NomeFantasia","svchar",0,"px",100,80,"left",null,[],"Nomefantasia","NomeFantasia",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(1699,32,"CONTAPAGRECDTEMISSAO","Data Emissão","","ContaPagRecDtEmissao","date",0,"px",10,10,"right",null,[],1699,"ContaPagRecDtEmissao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(1692,33,"CONTAPAGRECSITUACAO","Situação","ContaPagRecSituacao","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(1930,34,"LANCAMENTOCXABCODATA","Data","","LancamentoCxaBcoData","date",0,"px",10,10,"right",null,[],1930,"LancamentoCxaBcoData",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1701,35,"CONTAPAGRECDTVENCIMENTO","Vencimento","","ContaPagRecDtVencimento","date",0,"px",10,10,"right",null,[],1701,"ContaPagRecDtVencimento",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1868,36,"LANCAMENTOCXABCOCAIBANID","Caixa/Banco","","LancamentoCxaBcoCaiBanId","int",0,"px",5,5,"right",null,[],1868,"LancamentoCxaBcoCaiBanId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1713,37,"CONTAPAGRECVLRCONTA","Valor Conta","","ContaPagRecVlrConta","decimal",0,"px",22,22,"right",null,[],1713,"ContaPagRecVlrConta",false,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Valorconta",38,"vVALORCONTA","Valor Conta","","ValorConta","decimal",0,"px",22,22,"right",null,[],"Valorconta","ValorConta",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1928,39,"LANCAMENTOCXABCOEMPRESAID","Empresa","","LancamentoCxaBcoEmpresaid","char",0,"px",10,10,"left",null,[],1928,"LancamentoCxaBcoEmpresaid",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1933,40,"LANCAMENTOCXABCOVALOR","Valor","","LancamentoCxaBcoValor","decimal",0,"px",18,18,"right",null,[],1933,"LancamentoCxaBcoValor",false,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9009,41,"CONTAPROVISORIOOPERACAO","Operação","","ContaProvisorioOperacao","char",0,"px",1,1,"left",null,[],9009,"ContaProvisorioOperacao",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1638,42,"CONTAPAGRECCLIFORFANTASIA","Nome do Fornecedor","","ContaPagRecCliForFantasia","svchar",0,"px",60,60,"left",null,[],1638,"ContaPagRecCliForFantasia",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1866,43,"LANCAMENTOCXABCOPESSOAFANTASIA","Fantasia Cliente/Fornecedor","","LancamentoCxaBcoPessoaFantasia","svchar",0,"px",60,60,"left",null,[],1866,"LancamentoCxaBcoPessoaFantasia",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9042,44,"CONTAPROVISORIOCONTATIPO","Tipo do Documento","","ContaProvisorioContaTipo","int",0,"px",4,4,"right",null,[],9042,"ContaProvisorioContaTipo",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE3",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOVALORNOTA",gxz:"Z2710ContaProvisorioValorNota",gxold:"O2710ContaProvisorioValorNota",gxvar:"A2710ContaProvisorioValorNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2710ContaProvisorioValorNota=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2710ContaProvisorioValorNota=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CONTAPROVISORIOVALORNOTA",gx.O.A2710ContaProvisorioValorNota,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2710ContaProvisorioValorNota=this.val()},val:function(){return gx.fn.getDecimalValue("CONTAPROVISORIOVALORNOTA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 11 , function() {
   });
   GXValidFnc[14]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALOREFETIVADO",gxz:"ZV16ValorEfetivado",gxold:"OV16ValorEfetivado",gxvar:"AV16ValorEfetivado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ValorEfetivado=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV16ValorEfetivado=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALOREFETIVADO",gx.O.AV16ValorEfetivado,2,',')},c2v:function(){gx.O.AV16ValorEfetivado=this.val()},val:function(){return gx.fn.getDecimalValue("vVALOREFETIVADO",'.',',')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[21]={fld:"TXTAZUL", format:0,grid:0};
   GXValidFnc[22]={fld:"TXTVERMELHO", format:0,grid:0};
   GXValidFnc[25]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[27]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:this.Valid_Contapagrecnumero,isvalid:null,rgrid:[],fld:"CONTAPAGRECNUMERO",gxz:"Z1686ContaPagRecNumero",gxold:"O1686ContaPagRecNumero",gxvar:"A1686ContaPagRecNumero",ucs:[],op:[42,29,32,33,35,37,43,30,34,36,40,41,11],ip:[42,32,33,35,37,43,34,36,40,41,11,29,27,30,28,39],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1686ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1686ContaPagRecNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(26),gx.O.A1686ContaPagRecNumero,0)},c2v:function(){gx.O.A1686ContaPagRecNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(26),'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:this.Valid_Lancamentocxabconumero,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCONUMERO",gxz:"Z1929LancamentoCxaBcoNumero",gxold:"O1929LancamentoCxaBcoNumero",gxvar:"A1929LancamentoCxaBcoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1929LancamentoCxaBcoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1929LancamentoCxaBcoNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCONUMERO",row || gx.fn.currentGridRowImpl(26),gx.O.A1929LancamentoCxaBcoNumero,0)},c2v:function(){gx.O.A1929LancamentoCxaBcoNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMENTOCXABCONUMERO",row || gx.fn.currentGridRowImpl(26),'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:this.Valid_Contapagreccliforid,isvalid:null,rgrid:[],fld:"CONTAPAGRECCLIFORID",gxz:"Z1637ContaPagRecCliForId",gxold:"O1637ContaPagRecCliForId",gxvar:"A1637ContaPagRecCliForId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1637ContaPagRecCliForId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1637ContaPagRecCliForId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECCLIFORID",row || gx.fn.currentGridRowImpl(26),gx.O.A1637ContaPagRecCliForId,0)},c2v:function(){gx.O.A1637ContaPagRecCliForId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPAGRECCLIFORID",row || gx.fn.currentGridRowImpl(26),'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:this.Valid_Lancamentocxabcopessoaid,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOPESSOAID",gxz:"Z1865LancamentoCxaBcoPessoaId",gxold:"O1865LancamentoCxaBcoPessoaId",gxvar:"A1865LancamentoCxaBcoPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1865LancamentoCxaBcoPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1865LancamentoCxaBcoPessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCOPESSOAID",row || gx.fn.currentGridRowImpl(26),gx.O.A1865LancamentoCxaBcoPessoaId,0)},c2v:function(){gx.O.A1865LancamentoCxaBcoPessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMENTOCXABCOPESSOAID",row || gx.fn.currentGridRowImpl(26),'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEFANTASIA",gxz:"ZV19NomeFantasia",gxold:"OV19NomeFantasia",gxvar:"AV19NomeFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV19NomeFantasia=Value},v2z:function(Value){gx.O.ZV19NomeFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("vNOMEFANTASIA",row || gx.fn.currentGridRowImpl(26),gx.O.AV19NomeFantasia,0)},c2v:function(){gx.O.AV19NomeFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("vNOMEFANTASIA",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECDTEMISSAO",gxz:"Z1699ContaPagRecDtEmissao",gxold:"O1699ContaPagRecDtEmissao",gxvar:"A1699ContaPagRecDtEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1699ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1699ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECDTEMISSAO",row || gx.fn.currentGridRowImpl(26),gx.O.A1699ContaPagRecDtEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1699ContaPagRecDtEmissao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTAPAGRECDTEMISSAO",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECSITUACAO",gxz:"Z1692ContaPagRecSituacao",gxold:"O1692ContaPagRecSituacao",gxvar:"A1692ContaPagRecSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1692ContaPagRecSituacao=Value},v2z:function(Value){gx.O.Z1692ContaPagRecSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CONTAPAGRECSITUACAO",row || gx.fn.currentGridRowImpl(26),gx.O.A1692ContaPagRecSituacao)},c2v:function(){gx.O.A1692ContaPagRecSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECSITUACAO",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCODATA",gxz:"Z1930LancamentoCxaBcoData",gxold:"O1930LancamentoCxaBcoData",gxvar:"A1930LancamentoCxaBcoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1930LancamentoCxaBcoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1930LancamentoCxaBcoData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCODATA",row || gx.fn.currentGridRowImpl(26),gx.O.A1930LancamentoCxaBcoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1930LancamentoCxaBcoData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("LANCAMENTOCXABCODATA",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECDTVENCIMENTO",gxz:"Z1701ContaPagRecDtVencimento",gxold:"O1701ContaPagRecDtVencimento",gxvar:"A1701ContaPagRecDtVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1701ContaPagRecDtVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1701ContaPagRecDtVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECDTVENCIMENTO",row || gx.fn.currentGridRowImpl(26),gx.O.A1701ContaPagRecDtVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1701ContaPagRecDtVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTAPAGRECDTVENCIMENTO",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOCAIBANID",gxz:"Z1868LancamentoCxaBcoCaiBanId",gxold:"O1868LancamentoCxaBcoCaiBanId",gxvar:"A1868LancamentoCxaBcoCaiBanId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1868LancamentoCxaBcoCaiBanId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1868LancamentoCxaBcoCaiBanId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCOCAIBANID",row || gx.fn.currentGridRowImpl(26),gx.O.A1868LancamentoCxaBcoCaiBanId,0)},c2v:function(){gx.O.A1868LancamentoCxaBcoCaiBanId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMENTOCXABCOCAIBANID",row || gx.fn.currentGridRowImpl(26),'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECVLRCONTA",gxz:"Z1713ContaPagRecVlrConta",gxold:"O1713ContaPagRecVlrConta",gxvar:"A1713ContaPagRecVlrConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1713ContaPagRecVlrConta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1713ContaPagRecVlrConta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CONTAPAGRECVLRCONTA",row || gx.fn.currentGridRowImpl(26),gx.O.A1713ContaPagRecVlrConta,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1713ContaPagRecVlrConta=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CONTAPAGRECVLRCONTA",row || gx.fn.currentGridRowImpl(26),'.',',')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCONTA",gxz:"ZV15ValorConta",gxold:"OV15ValorConta",gxvar:"AV15ValorConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV15ValorConta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV15ValorConta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALORCONTA",row || gx.fn.currentGridRowImpl(26),gx.O.AV15ValorConta,2,',')},c2v:function(){gx.O.AV15ValorConta=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALORCONTA",row || gx.fn.currentGridRowImpl(26),'.',',')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:this.Valid_Lancamentocxabcoempresaid,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOEMPRESAID",gxz:"Z1928LancamentoCxaBcoEmpresaid",gxold:"O1928LancamentoCxaBcoEmpresaid",gxvar:"A1928LancamentoCxaBcoEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1928LancamentoCxaBcoEmpresaid=Value},v2z:function(Value){gx.O.Z1928LancamentoCxaBcoEmpresaid=Value},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCOEMPRESAID",row || gx.fn.currentGridRowImpl(26),gx.O.A1928LancamentoCxaBcoEmpresaid,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1928LancamentoCxaBcoEmpresaid=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOCXABCOEMPRESAID",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOVALOR",gxz:"Z1933LancamentoCxaBcoValor",gxold:"O1933LancamentoCxaBcoValor",gxvar:"A1933LancamentoCxaBcoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1933LancamentoCxaBcoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1933LancamentoCxaBcoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LANCAMENTOCXABCOVALOR",row || gx.fn.currentGridRowImpl(26),gx.O.A1933LancamentoCxaBcoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1933LancamentoCxaBcoValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LANCAMENTOCXABCOVALOR",row || gx.fn.currentGridRowImpl(26),'.',',')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOOPERACAO",gxz:"Z9009ContaProvisorioOperacao",gxold:"O9009ContaProvisorioOperacao",gxvar:"A9009ContaProvisorioOperacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9009ContaProvisorioOperacao=Value},v2z:function(Value){gx.O.Z9009ContaProvisorioOperacao=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPROVISORIOOPERACAO",row || gx.fn.currentGridRowImpl(26),gx.O.A9009ContaProvisorioOperacao,0)},c2v:function(){gx.O.A9009ContaProvisorioOperacao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPROVISORIOOPERACAO",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECCLIFORFANTASIA",gxz:"Z1638ContaPagRecCliForFantasia",gxold:"O1638ContaPagRecCliForFantasia",gxvar:"A1638ContaPagRecCliForFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1638ContaPagRecCliForFantasia=Value},v2z:function(Value){gx.O.Z1638ContaPagRecCliForFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECCLIFORFANTASIA",row || gx.fn.currentGridRowImpl(26),gx.O.A1638ContaPagRecCliForFantasia,0)},c2v:function(){gx.O.A1638ContaPagRecCliForFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECCLIFORFANTASIA",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOPESSOAFANTASIA",gxz:"Z1866LancamentoCxaBcoPessoaFantasia",gxold:"O1866LancamentoCxaBcoPessoaFantasia",gxvar:"A1866LancamentoCxaBcoPessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1866LancamentoCxaBcoPessoaFantasia=Value},v2z:function(Value){gx.O.Z1866LancamentoCxaBcoPessoaFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCOPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(26),gx.O.A1866LancamentoCxaBcoPessoaFantasia,0)},c2v:function(){gx.O.A1866LancamentoCxaBcoPessoaFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOCXABCOPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOCONTATIPO",gxz:"Z9042ContaProvisorioContaTipo",gxold:"O9042ContaProvisorioContaTipo",gxvar:"A9042ContaProvisorioContaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9042ContaProvisorioContaTipo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9042ContaProvisorioContaTipo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPROVISORIOCONTATIPO",row || gx.fn.currentGridRowImpl(26),gx.O.A9042ContaProvisorioContaTipo,0)},c2v:function(){gx.O.A9042ContaProvisorioContaTipo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPROVISORIOCONTATIPO",row || gx.fn.currentGridRowImpl(26),'.')},nac:gx.falseFn};
   GXValidFnc[45]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[48]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPROVISORIOOPERACAO",gxz:"ZV21ContaProvisorioOperacao",gxold:"OV21ContaProvisorioOperacao",gxvar:"AV21ContaProvisorioOperacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ContaProvisorioOperacao=Value},v2z:function(Value){gx.O.ZV21ContaProvisorioOperacao=Value},v2c:function(){gx.fn.setControlValue("vCONTAPROVISORIOOPERACAO",gx.O.AV21ContaProvisorioOperacao,0)},c2v:function(){gx.O.AV21ContaProvisorioOperacao=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPROVISORIOOPERACAO")},nac:gx.falseFn};
   this.A2710ContaProvisorioValorNota = 0 ;
   this.Z2710ContaProvisorioValorNota = 0 ;
   this.O2710ContaProvisorioValorNota = 0 ;
   this.AV16ValorEfetivado = 0 ;
   this.ZV16ValorEfetivado = 0 ;
   this.OV16ValorEfetivado = 0 ;
   this.Z1686ContaPagRecNumero = 0 ;
   this.O1686ContaPagRecNumero = 0 ;
   this.Z1929LancamentoCxaBcoNumero = 0 ;
   this.O1929LancamentoCxaBcoNumero = 0 ;
   this.Z1637ContaPagRecCliForId = 0 ;
   this.O1637ContaPagRecCliForId = 0 ;
   this.Z1865LancamentoCxaBcoPessoaId = 0 ;
   this.O1865LancamentoCxaBcoPessoaId = 0 ;
   this.ZV19NomeFantasia = "" ;
   this.OV19NomeFantasia = "" ;
   this.Z1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.O1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.Z1692ContaPagRecSituacao = "" ;
   this.O1692ContaPagRecSituacao = "" ;
   this.Z1930LancamentoCxaBcoData = gx.date.nullDate() ;
   this.O1930LancamentoCxaBcoData = gx.date.nullDate() ;
   this.Z1701ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.O1701ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.Z1868LancamentoCxaBcoCaiBanId = 0 ;
   this.O1868LancamentoCxaBcoCaiBanId = 0 ;
   this.Z1713ContaPagRecVlrConta = 0 ;
   this.O1713ContaPagRecVlrConta = 0 ;
   this.ZV15ValorConta = 0 ;
   this.OV15ValorConta = 0 ;
   this.Z1928LancamentoCxaBcoEmpresaid = "" ;
   this.O1928LancamentoCxaBcoEmpresaid = "" ;
   this.Z1933LancamentoCxaBcoValor = 0 ;
   this.O1933LancamentoCxaBcoValor = 0 ;
   this.Z9009ContaProvisorioOperacao = "" ;
   this.O9009ContaProvisorioOperacao = "" ;
   this.Z1638ContaPagRecCliForFantasia = "" ;
   this.O1638ContaPagRecCliForFantasia = "" ;
   this.Z1866LancamentoCxaBcoPessoaFantasia = "" ;
   this.O1866LancamentoCxaBcoPessoaFantasia = "" ;
   this.Z9042ContaProvisorioContaTipo = 0 ;
   this.O9042ContaProvisorioContaTipo = 0 ;
   this.AV21ContaProvisorioOperacao = "" ;
   this.ZV21ContaProvisorioOperacao = "" ;
   this.OV21ContaProvisorioOperacao = "" ;
   this.A2710ContaProvisorioValorNota = 0 ;
   this.AV16ValorEfetivado = 0 ;
   this.AV21ContaProvisorioOperacao = "" ;
   this.AV13ContaProvisorioEmpresaId = "" ;
   this.AV14ContaProvisorioNumero = 0 ;
   this.AV20ContaProvisorioNumeroTransf = 0 ;
   this.A2703ContaProvisorioNumero = 0 ;
   this.A2702ContaProvisorioEmpresaId = "" ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1636ContaPagRecCliForEmpId = "" ;
   this.A1864LancamentoCxaBcoPessoaEmpId = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1929LancamentoCxaBcoNumero = 0 ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A1865LancamentoCxaBcoPessoaId = 0 ;
   this.AV19NomeFantasia = "" ;
   this.A1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.A1692ContaPagRecSituacao = "" ;
   this.A1930LancamentoCxaBcoData = gx.date.nullDate() ;
   this.A1701ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.A1868LancamentoCxaBcoCaiBanId = 0 ;
   this.A1713ContaPagRecVlrConta = 0 ;
   this.AV15ValorConta = 0 ;
   this.A1928LancamentoCxaBcoEmpresaid = "" ;
   this.A1933LancamentoCxaBcoValor = 0 ;
   this.A9009ContaProvisorioOperacao = "" ;
   this.A1638ContaPagRecCliForFantasia = "" ;
   this.A1866LancamentoCxaBcoPessoaFantasia = "" ;
   this.A9042ContaProvisorioContaTipo = 0 ;
   this.AV18Diferenca = 0 ;
   this.Events = {"e11ho2_client": ["'FECHAR'", true] ,"e15ho2_client": ["ENTER", true] ,"e16ho2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV13ContaProvisorioEmpresaId',fld:'vCONTAPROVISORIOEMPRESAID',hsh:true},{av:'AV14ContaProvisorioNumero',fld:'vCONTAPROVISORIONUMERO',hsh:true},{av:'AV20ContaProvisorioNumeroTransf',fld:'vCONTAPROVISORIONUMEROTRANSF',hsh:true},{av:'A9009ContaProvisorioOperacao',fld:'CONTAPROVISORIOOPERACAO'},{av:'A1713ContaPagRecVlrConta',fld:'CONTAPAGRECVLRCONTA'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'},{av:'A1866LancamentoCxaBcoPessoaFantasia',fld:'LANCAMENTOCXABCOPESSOAFANTASIA'},{av:'A9042ContaProvisorioContaTipo',fld:'CONTAPROVISORIOCONTATIPO'},{av:'AV16ValorEfetivado',fld:'vVALOREFETIVADO'},{av:'A2710ContaProvisorioValorNota',fld:'CONTAPROVISORIOVALORNOTA'},{av:'AV18Diferenca',fld:'vDIFERENCA'},{av:'AV21ContaProvisorioOperacao',fld:'vCONTAPROVISORIOOPERACAO'}],[{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCONUMERO","Visible")',ctrl:'LANCAMENTOCXABCONUMERO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCODATA","Visible")',ctrl:'LANCAMENTOCXABCODATA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCOPESSOAID","Visible")',ctrl:'LANCAMENTOCXABCOPESSOAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCOCAIBANID","Visible")',ctrl:'LANCAMENTOCXABCOCAIBANID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECNUMERO","Visible")',ctrl:'CONTAPAGRECNUMERO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECDTEMISSAO","Visible")',ctrl:'CONTAPAGRECDTEMISSAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECDTVENCIMENTO","Visible")',ctrl:'CONTAPAGRECDTVENCIMENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECCLIFORID","Visible")',ctrl:'CONTAPAGRECCLIFORID',prop:'Visible'},{ctrl:'CONTAPAGRECSITUACAO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'A9009ContaProvisorioOperacao',fld:'CONTAPROVISORIOOPERACAO'},{av:'A1713ContaPagRecVlrConta',fld:'CONTAPAGRECVLRCONTA'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'},{av:'A1866LancamentoCxaBcoPessoaFantasia',fld:'LANCAMENTOCXABCOPESSOAFANTASIA'},{av:'A9042ContaProvisorioContaTipo',fld:'CONTAPROVISORIOCONTATIPO'},{av:'AV16ValorEfetivado',fld:'vVALOREFETIVADO'},{av:'A2710ContaProvisorioValorNota',fld:'CONTAPROVISORIOVALORNOTA'},{av:'AV18Diferenca',fld:'vDIFERENCA'}],[{av:'AV15ValorConta',fld:'vVALORCONTA'},{av:'AV19NomeFantasia',fld:'vNOMEFANTASIA'},{av:'AV18Diferenca',fld:'vDIFERENCA'},{av:'gx.fn.getCtrlProperty("TXTVERMELHO","Caption")',ctrl:'TXTVERMELHO',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TXTAZUL","Caption")',ctrl:'TXTAZUL',prop:'Caption'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV13ContaProvisorioEmpresaId',fld:'vCONTAPROVISORIOEMPRESAID',hsh:true},{av:'AV14ContaProvisorioNumero',fld:'vCONTAPROVISORIONUMERO',hsh:true},{av:'AV20ContaProvisorioNumeroTransf',fld:'vCONTAPROVISORIONUMEROTRANSF',hsh:true},{av:'A9009ContaProvisorioOperacao',fld:'CONTAPROVISORIOOPERACAO'},{av:'A1713ContaPagRecVlrConta',fld:'CONTAPAGRECVLRCONTA'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'},{av:'A1866LancamentoCxaBcoPessoaFantasia',fld:'LANCAMENTOCXABCOPESSOAFANTASIA'},{av:'A9042ContaProvisorioContaTipo',fld:'CONTAPROVISORIOCONTATIPO'},{av:'AV16ValorEfetivado',fld:'vVALOREFETIVADO'},{av:'A2710ContaProvisorioValorNota',fld:'CONTAPROVISORIOVALORNOTA'},{av:'AV18Diferenca',fld:'vDIFERENCA'},{av:'AV21ContaProvisorioOperacao',fld:'vCONTAPROVISORIOOPERACAO'}],[{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCONUMERO","Visible")',ctrl:'LANCAMENTOCXABCONUMERO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCODATA","Visible")',ctrl:'LANCAMENTOCXABCODATA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCOPESSOAID","Visible")',ctrl:'LANCAMENTOCXABCOPESSOAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCOCAIBANID","Visible")',ctrl:'LANCAMENTOCXABCOCAIBANID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECNUMERO","Visible")',ctrl:'CONTAPAGRECNUMERO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECDTEMISSAO","Visible")',ctrl:'CONTAPAGRECDTEMISSAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECDTVENCIMENTO","Visible")',ctrl:'CONTAPAGRECDTVENCIMENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECCLIFORID","Visible")',ctrl:'CONTAPAGRECCLIFORID',prop:'Visible'},{ctrl:'CONTAPAGRECSITUACAO'}]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV13ContaProvisorioEmpresaId',fld:'vCONTAPROVISORIOEMPRESAID',hsh:true},{av:'AV14ContaProvisorioNumero',fld:'vCONTAPROVISORIONUMERO',hsh:true},{av:'AV20ContaProvisorioNumeroTransf',fld:'vCONTAPROVISORIONUMEROTRANSF',hsh:true},{av:'A9009ContaProvisorioOperacao',fld:'CONTAPROVISORIOOPERACAO'},{av:'A1713ContaPagRecVlrConta',fld:'CONTAPAGRECVLRCONTA'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'},{av:'A1866LancamentoCxaBcoPessoaFantasia',fld:'LANCAMENTOCXABCOPESSOAFANTASIA'},{av:'A9042ContaProvisorioContaTipo',fld:'CONTAPROVISORIOCONTATIPO'},{av:'AV16ValorEfetivado',fld:'vVALOREFETIVADO'},{av:'A2710ContaProvisorioValorNota',fld:'CONTAPROVISORIOVALORNOTA'},{av:'AV18Diferenca',fld:'vDIFERENCA'},{av:'AV21ContaProvisorioOperacao',fld:'vCONTAPROVISORIOOPERACAO'}],[{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCONUMERO","Visible")',ctrl:'LANCAMENTOCXABCONUMERO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCODATA","Visible")',ctrl:'LANCAMENTOCXABCODATA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCOPESSOAID","Visible")',ctrl:'LANCAMENTOCXABCOPESSOAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCOCAIBANID","Visible")',ctrl:'LANCAMENTOCXABCOCAIBANID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECNUMERO","Visible")',ctrl:'CONTAPAGRECNUMERO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECDTEMISSAO","Visible")',ctrl:'CONTAPAGRECDTEMISSAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECDTVENCIMENTO","Visible")',ctrl:'CONTAPAGRECDTVENCIMENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECCLIFORID","Visible")',ctrl:'CONTAPAGRECCLIFORID',prop:'Visible'},{ctrl:'CONTAPAGRECSITUACAO'}]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV13ContaProvisorioEmpresaId',fld:'vCONTAPROVISORIOEMPRESAID',hsh:true},{av:'AV14ContaProvisorioNumero',fld:'vCONTAPROVISORIONUMERO',hsh:true},{av:'AV20ContaProvisorioNumeroTransf',fld:'vCONTAPROVISORIONUMEROTRANSF',hsh:true},{av:'A9009ContaProvisorioOperacao',fld:'CONTAPROVISORIOOPERACAO'},{av:'A1713ContaPagRecVlrConta',fld:'CONTAPAGRECVLRCONTA'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'},{av:'A1866LancamentoCxaBcoPessoaFantasia',fld:'LANCAMENTOCXABCOPESSOAFANTASIA'},{av:'A9042ContaProvisorioContaTipo',fld:'CONTAPROVISORIOCONTATIPO'},{av:'AV16ValorEfetivado',fld:'vVALOREFETIVADO'},{av:'A2710ContaProvisorioValorNota',fld:'CONTAPROVISORIOVALORNOTA'},{av:'AV18Diferenca',fld:'vDIFERENCA'},{av:'AV21ContaProvisorioOperacao',fld:'vCONTAPROVISORIOOPERACAO'}],[{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCONUMERO","Visible")',ctrl:'LANCAMENTOCXABCONUMERO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCODATA","Visible")',ctrl:'LANCAMENTOCXABCODATA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCOPESSOAID","Visible")',ctrl:'LANCAMENTOCXABCOPESSOAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCOCAIBANID","Visible")',ctrl:'LANCAMENTOCXABCOCAIBANID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECNUMERO","Visible")',ctrl:'CONTAPAGRECNUMERO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECDTEMISSAO","Visible")',ctrl:'CONTAPAGRECDTEMISSAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECDTVENCIMENTO","Visible")',ctrl:'CONTAPAGRECDTVENCIMENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECCLIFORID","Visible")',ctrl:'CONTAPAGRECCLIFORID',prop:'Visible'},{ctrl:'CONTAPAGRECSITUACAO'}]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV13ContaProvisorioEmpresaId',fld:'vCONTAPROVISORIOEMPRESAID',hsh:true},{av:'AV14ContaProvisorioNumero',fld:'vCONTAPROVISORIONUMERO',hsh:true},{av:'AV20ContaProvisorioNumeroTransf',fld:'vCONTAPROVISORIONUMEROTRANSF',hsh:true},{av:'A9009ContaProvisorioOperacao',fld:'CONTAPROVISORIOOPERACAO'},{av:'A1713ContaPagRecVlrConta',fld:'CONTAPAGRECVLRCONTA'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'},{av:'A1866LancamentoCxaBcoPessoaFantasia',fld:'LANCAMENTOCXABCOPESSOAFANTASIA'},{av:'A9042ContaProvisorioContaTipo',fld:'CONTAPROVISORIOCONTATIPO'},{av:'AV16ValorEfetivado',fld:'vVALOREFETIVADO'},{av:'A2710ContaProvisorioValorNota',fld:'CONTAPROVISORIOVALORNOTA'},{av:'AV18Diferenca',fld:'vDIFERENCA'},{av:'AV21ContaProvisorioOperacao',fld:'vCONTAPROVISORIOOPERACAO'}],[{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCONUMERO","Visible")',ctrl:'LANCAMENTOCXABCONUMERO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCODATA","Visible")',ctrl:'LANCAMENTOCXABCODATA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCOPESSOAID","Visible")',ctrl:'LANCAMENTOCXABCOPESSOAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCXABCOCAIBANID","Visible")',ctrl:'LANCAMENTOCXABCOCAIBANID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECNUMERO","Visible")',ctrl:'CONTAPAGRECNUMERO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECDTEMISSAO","Visible")',ctrl:'CONTAPAGRECDTEMISSAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECDTVENCIMENTO","Visible")',ctrl:'CONTAPAGRECDTVENCIMENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECCLIFORID","Visible")',ctrl:'CONTAPAGRECCLIFORID',prop:'Visible'},{ctrl:'CONTAPAGRECSITUACAO'}]];
   this.setVCMap("AV13ContaProvisorioEmpresaId", "vCONTAPROVISORIOEMPRESAID", 0, "char");
   this.setVCMap("AV14ContaProvisorioNumero", "vCONTAPROVISORIONUMERO", 0, "int");
   this.setVCMap("AV20ContaProvisorioNumeroTransf", "vCONTAPROVISORIONUMEROTRANSF", 0, "int");
   this.setVCMap("AV18Diferenca", "vDIFERENCA", 0, "decimal");
   this.setVCMap("AV13ContaProvisorioEmpresaId", "vCONTAPROVISORIOEMPRESAID", 0, "char");
   this.setVCMap("AV14ContaProvisorioNumero", "vCONTAPROVISORIONUMERO", 0, "int");
   this.setVCMap("AV20ContaProvisorioNumeroTransf", "vCONTAPROVISORIONUMEROTRANSF", 0, "int");
   this.setVCMap("AV18Diferenca", "vDIFERENCA", 0, "decimal");
   Grid1Container.addRefreshingVar({rfrVar:"AV13ContaProvisorioEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV14ContaProvisorioNumero"});
   Grid1Container.addRefreshingVar({rfrVar:"AV20ContaProvisorioNumeroTransf"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[48]);
   Grid1Container.addRefreshingVar({rfrVar:"A9009ContaProvisorioOperacao", rfrProp:"Value", gxAttId:"9009"});
   Grid1Container.addRefreshingVar({rfrVar:"A1713ContaPagRecVlrConta", rfrProp:"Value", gxAttId:"1713"});
   Grid1Container.addRefreshingVar({rfrVar:"A1638ContaPagRecCliForFantasia", rfrProp:"Value", gxAttId:"1638"});
   Grid1Container.addRefreshingVar({rfrVar:"A1933LancamentoCxaBcoValor", rfrProp:"Value", gxAttId:"1933"});
   Grid1Container.addRefreshingVar({rfrVar:"A1866LancamentoCxaBcoPessoaFantasia", rfrProp:"Value", gxAttId:"1866"});
   Grid1Container.addRefreshingVar({rfrVar:"A9042ContaProvisorioContaTipo", rfrProp:"Value", gxAttId:"9042"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[16]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[11]);
   Grid1Container.addRefreshingVar({rfrVar:"AV18Diferenca"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultacontasprovisorias());
