/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:16:23.35
*/
gx.evt.autoSkip = false;
gx.define('hconsultalanccxabcorateio', false, function () {
   this.ServerClass =  "hconsultalanccxabcorateio" ;
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
      this.AV19LancamentoCxaBcoEmpresaid=gx.fn.getControlValue("vLANCAMENTOCXABCOEMPRESAID") ;
      this.A1953LancamCxaBcoRateioCCustoDesc=gx.fn.getControlValue("LANCAMCXABCORATEIOCCUSTODESC") ;
      this.A1952LancamCxaBcoRateioCCustoId=gx.fn.getControlValue("LANCAMCXABCORATEIOCCUSTOID") ;
      this.A1957LancamCxaBcoRateioCContabilEmp=gx.fn.getControlValue("LANCAMCXABCORATEIOCCONTABILEMP") ;
      this.A1958LancamCxaBcoRateioCContabilId=gx.fn.getControlValue("LANCAMCXABCORATEIOCCONTABILID") ;
      this.A1956LancamCxaBcoRateioNaturezaDesc=gx.fn.getControlValue("LANCAMCXABCORATEIONATUREZADESC") ;
      this.A1955LancamCxaBcoRateioNaturezaId=gx.fn.getControlValue("LANCAMCXABCORATEIONATUREZAID") ;
      this.A1961LancamCxaBcoRateioValor=gx.fn.getDecimalValue("LANCAMCXABCORATEIOVALOR",'.',',') ;
      this.A1933LancamentoCxaBcoValor=gx.fn.getDecimalValue("LANCAMENTOCXABCOVALOR",'.',',') ;
   };
   this.Validv_Lancamentocxabconumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLANCAMENTOCXABCONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocxabcocaibanid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCXABCOCAIBANID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocxabcohisid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCXABCOHISID");
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
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCXABCOPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12bv2_client=function()
   {
      this.executeServerEvent("'CONSULTALOGGERAL'", true, null, false, false);
   };
   this.e11bv2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15bv2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e16bv2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,16,19,21,24,26,28,30,32,35,37,39,41,44,46,49,51,53,58,60,63,65,67,74,76,77,78,79,80,81,82,85,91,92];
   this.GXLastCtrlId =92;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",75,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hconsultalanccxabcorateio",[],false,1,true,true,0,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("Centrocustoid",76,"vCENTROCUSTOID","Centro de Custo","","centroCustoId","svchar",0,"px",30,30,"left",null,[],"Centrocustoid","centroCustoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Centrocustodescricao",77,"vCENTROCUSTODESCRICAO","Descrição","","CentroCustoDescricao","svchar",0,"px",35,35,"left",null,[],"Centrocustodescricao","CentroCustoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("Naturezaid",78,"vNATUREZAID","Natureza","","NaturezaId","svchar",0,"px",30,30,"left",null,[],"Naturezaid","NaturezaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Naturezadescricao",79,"vNATUREZADESCRICAO","Descricao","","NaturezaDescricao","svchar",0,"px",35,35,"left",null,[],"Naturezadescricao","NaturezaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("Contacontabiltradutor",80,"vCONTACONTABILTRADUTOR","Tradutor","","ContaContabilTradutor","char",0,"px",9,9,"left",null,[],"Contacontabiltradutor","ContaContabilTradutor",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Valoritem",81,"vVALORITEM","Valor","","ValorItem","decimal",0,"px",22,22,"right",null,[],"Valoritem","ValorItem",true,2,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Lancamentocxabconumero,isvalid:null,rgrid:[this.Grid1Container],fld:"vLANCAMENTOCXABCONUMERO",gxz:"ZV20LancamentoCxaBcoNumero",gxold:"OV20LancamentoCxaBcoNumero",gxvar:"AV20LancamentoCxaBcoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20LancamentoCxaBcoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20LancamentoCxaBcoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCXABCONUMERO",gx.O.AV20LancamentoCxaBcoNumero,0)},c2v:function(){gx.O.AV20LancamentoCxaBcoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCXABCONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV21AcessoSistemaSequencia",gxold:"OV21AcessoSistemaSequencia",gxvar:"AV21AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV21AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV21AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TABLE13",grid:0};
   GXValidFnc[19]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[21]={fld:"TABLE10",grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Lancamentocxabcocaibanid,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOCAIBANID",gxz:"Z1868LancamentoCxaBcoCaiBanId",gxold:"O1868LancamentoCxaBcoCaiBanId",gxvar:"A1868LancamentoCxaBcoCaiBanId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1868LancamentoCxaBcoCaiBanId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1868LancamentoCxaBcoCaiBanId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOCXABCOCAIBANID",gx.O.A1868LancamentoCxaBcoCaiBanId,0)},c2v:function(){gx.O.A1868LancamentoCxaBcoCaiBanId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LANCAMENTOCXABCOCAIBANID",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOCAIBANDESCRICA",gxz:"Z1869LancamentoCxaBcoCaiBanDescrica",gxold:"O1869LancamentoCxaBcoCaiBanDescrica",gxvar:"A1869LancamentoCxaBcoCaiBanDescrica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1869LancamentoCxaBcoCaiBanDescrica=Value},v2z:function(Value){gx.O.Z1869LancamentoCxaBcoCaiBanDescrica=Value},v2c:function(){gx.fn.setControlValue("LANCAMENTOCXABCOCAIBANDESCRICA",gx.O.A1869LancamentoCxaBcoCaiBanDescrica,0)},c2v:function(){gx.O.A1869LancamentoCxaBcoCaiBanDescrica=this.val()},val:function(){return gx.fn.getControlValue("LANCAMENTOCXABCOCAIBANDESCRICA")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCODATA",gxz:"Z1930LancamentoCxaBcoData",gxold:"O1930LancamentoCxaBcoData",gxvar:"A1930LancamentoCxaBcoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1930LancamentoCxaBcoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1930LancamentoCxaBcoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOCXABCODATA",gx.O.A1930LancamentoCxaBcoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1930LancamentoCxaBcoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("LANCAMENTOCXABCODATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[35]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCODOCUMENTO",gxz:"Z1932LancamentoCxaBcoDocumento",gxold:"O1932LancamentoCxaBcoDocumento",gxvar:"A1932LancamentoCxaBcoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1932LancamentoCxaBcoDocumento=Value},v2z:function(Value){gx.O.Z1932LancamentoCxaBcoDocumento=Value},v2c:function(){gx.fn.setControlValue("LANCAMENTOCXABCODOCUMENTO",gx.O.A1932LancamentoCxaBcoDocumento,0)},c2v:function(){gx.O.A1932LancamentoCxaBcoDocumento=this.val()},val:function(){return gx.fn.getControlValue("LANCAMENTOCXABCODOCUMENTO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORLANCAMENTO",gxz:"ZV17ValorLancamento",gxold:"OV17ValorLancamento",gxvar:"AV17ValorLancamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ValorLancamento=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV17ValorLancamento=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORLANCAMENTO",gx.O.AV17ValorLancamento,2,',')},c2v:function(){gx.O.AV17ValorLancamento=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORLANCAMENTO",'.',',')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[46]={fld:"TABLE11",grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Lancamentocxabcohisid,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOHISID",gxz:"Z1871LancamentoCxaBcoHisId",gxold:"O1871LancamentoCxaBcoHisId",gxvar:"A1871LancamentoCxaBcoHisId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1871LancamentoCxaBcoHisId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1871LancamentoCxaBcoHisId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOCXABCOHISID",gx.O.A1871LancamentoCxaBcoHisId,0)},c2v:function(){gx.O.A1871LancamentoCxaBcoHisId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LANCAMENTOCXABCOHISID",'.')},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOHISDESCRICAO",gxz:"Z1872LancamentoCxaBcoHisDescricao",gxold:"O1872LancamentoCxaBcoHisDescricao",gxvar:"A1872LancamentoCxaBcoHisDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1872LancamentoCxaBcoHisDescricao=Value},v2z:function(Value){gx.O.Z1872LancamentoCxaBcoHisDescricao=Value},v2c:function(){gx.fn.setControlValue("LANCAMENTOCXABCOHISDESCRICAO",gx.O.A1872LancamentoCxaBcoHisDescricao,0)},c2v:function(){gx.O.A1872LancamentoCxaBcoHisDescricao=this.val()},val:function(){return gx.fn.getControlValue("LANCAMENTOCXABCOHISDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[60]={fld:"TABLE12",grid:0};
   GXValidFnc[63]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Lancamentocxabcopessoaid,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOPESSOAID",gxz:"Z1865LancamentoCxaBcoPessoaId",gxold:"O1865LancamentoCxaBcoPessoaId",gxvar:"A1865LancamentoCxaBcoPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1865LancamentoCxaBcoPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1865LancamentoCxaBcoPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOCXABCOPESSOAID",gx.O.A1865LancamentoCxaBcoPessoaId,0)},c2v:function(){gx.O.A1865LancamentoCxaBcoPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LANCAMENTOCXABCOPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOPESSOAFANTASIA",gxz:"Z1866LancamentoCxaBcoPessoaFantasia",gxold:"O1866LancamentoCxaBcoPessoaFantasia",gxvar:"A1866LancamentoCxaBcoPessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1866LancamentoCxaBcoPessoaFantasia=Value},v2z:function(Value){gx.O.Z1866LancamentoCxaBcoPessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("LANCAMENTOCXABCOPESSOAFANTASIA",gx.O.A1866LancamentoCxaBcoPessoaFantasia,0)},c2v:function(){gx.O.A1866LancamentoCxaBcoPessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("LANCAMENTOCXABCOPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[74]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[76]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:75,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTOID",gxz:"ZV11centroCustoId",gxold:"OV11centroCustoId",gxvar:"AV11centroCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV11centroCustoId=Value},v2z:function(Value){gx.O.ZV11centroCustoId=Value},v2c:function(row){gx.fn.setGridControlValue("vCENTROCUSTOID",row || gx.fn.currentGridRowImpl(75),gx.O.AV11centroCustoId,0)},c2v:function(){gx.O.AV11centroCustoId=this.val()},val:function(row){return gx.fn.getGridControlValue("vCENTROCUSTOID",row || gx.fn.currentGridRowImpl(75))},nac:gx.falseFn};
   GXValidFnc[77]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:75,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTODESCRICAO",gxz:"ZV16CentroCustoDescricao",gxold:"OV16CentroCustoDescricao",gxvar:"AV16CentroCustoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV16CentroCustoDescricao=Value},v2z:function(Value){gx.O.ZV16CentroCustoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vCENTROCUSTODESCRICAO",row || gx.fn.currentGridRowImpl(75),gx.O.AV16CentroCustoDescricao,0)},c2v:function(){gx.O.AV16CentroCustoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vCENTROCUSTODESCRICAO",row || gx.fn.currentGridRowImpl(75))},nac:gx.falseFn};
   GXValidFnc[78]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:75,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAID",gxz:"ZV12NaturezaId",gxold:"OV12NaturezaId",gxvar:"AV12NaturezaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV12NaturezaId=Value},v2z:function(Value){gx.O.ZV12NaturezaId=Value},v2c:function(row){gx.fn.setGridControlValue("vNATUREZAID",row || gx.fn.currentGridRowImpl(75),gx.O.AV12NaturezaId,0)},c2v:function(){gx.O.AV12NaturezaId=this.val()},val:function(row){return gx.fn.getGridControlValue("vNATUREZAID",row || gx.fn.currentGridRowImpl(75))},nac:gx.falseFn};
   GXValidFnc[79]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:75,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZADESCRICAO",gxz:"ZV13NaturezaDescricao",gxold:"OV13NaturezaDescricao",gxvar:"AV13NaturezaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV13NaturezaDescricao=Value},v2z:function(Value){gx.O.ZV13NaturezaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vNATUREZADESCRICAO",row || gx.fn.currentGridRowImpl(75),gx.O.AV13NaturezaDescricao,0)},c2v:function(){gx.O.AV13NaturezaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vNATUREZADESCRICAO",row || gx.fn.currentGridRowImpl(75))},nac:gx.falseFn};
   GXValidFnc[80]={lvl:2,type:"char",len:9,dec:0,sign:false,ro:1,isacc:0,grid:75,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTOR",gxz:"ZV14ContaContabilTradutor",gxold:"OV14ContaContabilTradutor",gxvar:"AV14ContaContabilTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV14ContaContabilTradutor=Value},v2z:function(Value){gx.O.ZV14ContaContabilTradutor=Value},v2c:function(row){gx.fn.setGridControlValue("vCONTACONTABILTRADUTOR",row || gx.fn.currentGridRowImpl(75),gx.O.AV14ContaContabilTradutor,0)},c2v:function(){gx.O.AV14ContaContabilTradutor=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONTACONTABILTRADUTOR",row || gx.fn.currentGridRowImpl(75))},nac:gx.falseFn};
   GXValidFnc[81]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:75,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vVALORITEM",gxz:"ZV15ValorItem",gxold:"OV15ValorItem",gxvar:"AV15ValorItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV15ValorItem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV15ValorItem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALORITEM",row || gx.fn.currentGridRowImpl(75),gx.O.AV15ValorItem,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV15ValorItem=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALORITEM",row || gx.fn.currentGridRowImpl(75),'.',',')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[85]={fld:"TABLE5",grid:0};
   GXValidFnc[91]={fld:"BTNLOG",grid:0};
   GXValidFnc[92]={fld:"BTNHELP",grid:0};
   this.AV20LancamentoCxaBcoNumero = 0 ;
   this.ZV20LancamentoCxaBcoNumero = 0 ;
   this.OV20LancamentoCxaBcoNumero = 0 ;
   this.AV21AcessoSistemaSequencia = 0 ;
   this.ZV21AcessoSistemaSequencia = 0 ;
   this.OV21AcessoSistemaSequencia = 0 ;
   this.A1868LancamentoCxaBcoCaiBanId = 0 ;
   this.Z1868LancamentoCxaBcoCaiBanId = 0 ;
   this.O1868LancamentoCxaBcoCaiBanId = 0 ;
   this.A1869LancamentoCxaBcoCaiBanDescrica = "" ;
   this.Z1869LancamentoCxaBcoCaiBanDescrica = "" ;
   this.O1869LancamentoCxaBcoCaiBanDescrica = "" ;
   this.A1930LancamentoCxaBcoData = gx.date.nullDate() ;
   this.Z1930LancamentoCxaBcoData = gx.date.nullDate() ;
   this.O1930LancamentoCxaBcoData = gx.date.nullDate() ;
   this.A1932LancamentoCxaBcoDocumento = "" ;
   this.Z1932LancamentoCxaBcoDocumento = "" ;
   this.O1932LancamentoCxaBcoDocumento = "" ;
   this.AV17ValorLancamento = 0 ;
   this.ZV17ValorLancamento = 0 ;
   this.OV17ValorLancamento = 0 ;
   this.A1871LancamentoCxaBcoHisId = 0 ;
   this.Z1871LancamentoCxaBcoHisId = 0 ;
   this.O1871LancamentoCxaBcoHisId = 0 ;
   this.A1872LancamentoCxaBcoHisDescricao = "" ;
   this.Z1872LancamentoCxaBcoHisDescricao = "" ;
   this.O1872LancamentoCxaBcoHisDescricao = "" ;
   this.A1865LancamentoCxaBcoPessoaId = 0 ;
   this.Z1865LancamentoCxaBcoPessoaId = 0 ;
   this.O1865LancamentoCxaBcoPessoaId = 0 ;
   this.A1866LancamentoCxaBcoPessoaFantasia = "" ;
   this.Z1866LancamentoCxaBcoPessoaFantasia = "" ;
   this.O1866LancamentoCxaBcoPessoaFantasia = "" ;
   this.ZV11centroCustoId = "" ;
   this.OV11centroCustoId = "" ;
   this.ZV16CentroCustoDescricao = "" ;
   this.OV16CentroCustoDescricao = "" ;
   this.ZV12NaturezaId = "" ;
   this.OV12NaturezaId = "" ;
   this.ZV13NaturezaDescricao = "" ;
   this.OV13NaturezaDescricao = "" ;
   this.ZV14ContaContabilTradutor = "" ;
   this.OV14ContaContabilTradutor = "" ;
   this.ZV15ValorItem = 0 ;
   this.OV15ValorItem = 0 ;
   this.AV20LancamentoCxaBcoNumero = 0 ;
   this.AV21AcessoSistemaSequencia = 0 ;
   this.A1868LancamentoCxaBcoCaiBanId = 0 ;
   this.A1869LancamentoCxaBcoCaiBanDescrica = "" ;
   this.A1930LancamentoCxaBcoData = gx.date.nullDate() ;
   this.A1932LancamentoCxaBcoDocumento = "" ;
   this.AV17ValorLancamento = 0 ;
   this.A1871LancamentoCxaBcoHisId = 0 ;
   this.A1872LancamentoCxaBcoHisDescricao = "" ;
   this.A1865LancamentoCxaBcoPessoaId = 0 ;
   this.A1866LancamentoCxaBcoPessoaFantasia = "" ;
   this.AV19LancamentoCxaBcoEmpresaid = "" ;
   this.A1928LancamentoCxaBcoEmpresaid = "" ;
   this.A1929LancamentoCxaBcoNumero = 0 ;
   this.A1953LancamCxaBcoRateioCCustoDesc = "" ;
   this.A1952LancamCxaBcoRateioCCustoId = "" ;
   this.A1957LancamCxaBcoRateioCContabilEmp = "" ;
   this.A1958LancamCxaBcoRateioCContabilId = "" ;
   this.A1956LancamCxaBcoRateioNaturezaDesc = "" ;
   this.A1955LancamCxaBcoRateioNaturezaId = "" ;
   this.A1961LancamCxaBcoRateioValor = 0 ;
   this.A1933LancamentoCxaBcoValor = 0 ;
   this.A1867LancamentoCxaBcoCaiBanEmpId = "" ;
   this.A1870LancamentoCxaBcoHisEmpId = "" ;
   this.A1864LancamentoCxaBcoPessoaEmpId = "" ;
   this.A1951LancamCxaBcoRateioCCustoEmpId = "" ;
   this.A1954LancamCxaBcoRateioNaturezaEmpI = "" ;
   this.AV11centroCustoId = "" ;
   this.AV16CentroCustoDescricao = "" ;
   this.AV12NaturezaId = "" ;
   this.AV13NaturezaDescricao = "" ;
   this.AV14ContaContabilTradutor = "" ;
   this.AV15ValorItem = 0 ;
   this.Events = {"e12bv2_client": ["'CONSULTALOGGERAL'", true] ,"e11bv2_client": ["'FECHAR'", true] ,"e15bv2_client": ["ENTER", true] ,"e16bv2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV19LancamentoCxaBcoEmpresaid',fld:'vLANCAMENTOCXABCOEMPRESAID',hsh:true},{av:'AV20LancamentoCxaBcoNumero',fld:'vLANCAMENTOCXABCONUMERO',hsh:true},{av:'A1953LancamCxaBcoRateioCCustoDesc',fld:'LANCAMCXABCORATEIOCCUSTODESC'},{av:'A1952LancamCxaBcoRateioCCustoId',fld:'LANCAMCXABCORATEIOCCUSTOID'},{av:'A1957LancamCxaBcoRateioCContabilEmp',fld:'LANCAMCXABCORATEIOCCONTABILEMP'},{av:'A1958LancamCxaBcoRateioCContabilId',fld:'LANCAMCXABCORATEIOCCONTABILID'},{av:'A1956LancamCxaBcoRateioNaturezaDesc',fld:'LANCAMCXABCORATEIONATUREZADESC'},{av:'A1955LancamCxaBcoRateioNaturezaId',fld:'LANCAMCXABCORATEIONATUREZAID'},{av:'A1961LancamCxaBcoRateioValor',fld:'LANCAMCXABCORATEIOVALOR'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'}],[]];
   this.EvtParms["'CONSULTALOGGERAL'"] = [[{av:'AV19LancamentoCxaBcoEmpresaid',fld:'vLANCAMENTOCXABCOEMPRESAID',hsh:true},{av:'AV20LancamentoCxaBcoNumero',fld:'vLANCAMENTOCXABCONUMERO',hsh:true}],[{av:'AV22Log',fld:'vLOG'}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'A1953LancamCxaBcoRateioCCustoDesc',fld:'LANCAMCXABCORATEIOCCUSTODESC'},{av:'A1952LancamCxaBcoRateioCCustoId',fld:'LANCAMCXABCORATEIOCCUSTOID'},{av:'A1957LancamCxaBcoRateioCContabilEmp',fld:'LANCAMCXABCORATEIOCCONTABILEMP'},{av:'A1958LancamCxaBcoRateioCContabilId',fld:'LANCAMCXABCORATEIOCCONTABILID'},{av:'A1956LancamCxaBcoRateioNaturezaDesc',fld:'LANCAMCXABCORATEIONATUREZADESC'},{av:'A1955LancamCxaBcoRateioNaturezaId',fld:'LANCAMCXABCORATEIONATUREZAID'},{av:'A1961LancamCxaBcoRateioValor',fld:'LANCAMCXABCORATEIOVALOR'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'}],[{av:'AV16CentroCustoDescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV11centroCustoId',fld:'vCENTROCUSTOID'},{av:'AV14ContaContabilTradutor',fld:'vCONTACONTABILTRADUTOR'},{av:'AV13NaturezaDescricao',fld:'vNATUREZADESCRICAO'},{av:'AV12NaturezaId',fld:'vNATUREZAID'},{av:'AV15ValorItem',fld:'vVALORITEM'},{av:'AV17ValorLancamento',fld:'vVALORLANCAMENTO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV21AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV19LancamentoCxaBcoEmpresaid',fld:'vLANCAMENTOCXABCOEMPRESAID',hsh:true},{av:'AV20LancamentoCxaBcoNumero',fld:'vLANCAMENTOCXABCONUMERO',hsh:true},{av:'A1953LancamCxaBcoRateioCCustoDesc',fld:'LANCAMCXABCORATEIOCCUSTODESC'},{av:'A1952LancamCxaBcoRateioCCustoId',fld:'LANCAMCXABCORATEIOCCUSTOID'},{av:'A1957LancamCxaBcoRateioCContabilEmp',fld:'LANCAMCXABCORATEIOCCONTABILEMP'},{av:'A1958LancamCxaBcoRateioCContabilId',fld:'LANCAMCXABCORATEIOCCONTABILID'},{av:'A1956LancamCxaBcoRateioNaturezaDesc',fld:'LANCAMCXABCORATEIONATUREZADESC'},{av:'A1955LancamCxaBcoRateioNaturezaId',fld:'LANCAMCXABCORATEIONATUREZAID'},{av:'A1961LancamCxaBcoRateioValor',fld:'LANCAMCXABCORATEIOVALOR'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV19LancamentoCxaBcoEmpresaid',fld:'vLANCAMENTOCXABCOEMPRESAID',hsh:true},{av:'AV20LancamentoCxaBcoNumero',fld:'vLANCAMENTOCXABCONUMERO',hsh:true},{av:'A1953LancamCxaBcoRateioCCustoDesc',fld:'LANCAMCXABCORATEIOCCUSTODESC'},{av:'A1952LancamCxaBcoRateioCCustoId',fld:'LANCAMCXABCORATEIOCCUSTOID'},{av:'A1957LancamCxaBcoRateioCContabilEmp',fld:'LANCAMCXABCORATEIOCCONTABILEMP'},{av:'A1958LancamCxaBcoRateioCContabilId',fld:'LANCAMCXABCORATEIOCCONTABILID'},{av:'A1956LancamCxaBcoRateioNaturezaDesc',fld:'LANCAMCXABCORATEIONATUREZADESC'},{av:'A1955LancamCxaBcoRateioNaturezaId',fld:'LANCAMCXABCORATEIONATUREZAID'},{av:'A1961LancamCxaBcoRateioValor',fld:'LANCAMCXABCORATEIOVALOR'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV19LancamentoCxaBcoEmpresaid',fld:'vLANCAMENTOCXABCOEMPRESAID',hsh:true},{av:'AV20LancamentoCxaBcoNumero',fld:'vLANCAMENTOCXABCONUMERO',hsh:true},{av:'A1953LancamCxaBcoRateioCCustoDesc',fld:'LANCAMCXABCORATEIOCCUSTODESC'},{av:'A1952LancamCxaBcoRateioCCustoId',fld:'LANCAMCXABCORATEIOCCUSTOID'},{av:'A1957LancamCxaBcoRateioCContabilEmp',fld:'LANCAMCXABCORATEIOCCONTABILEMP'},{av:'A1958LancamCxaBcoRateioCContabilId',fld:'LANCAMCXABCORATEIOCCONTABILID'},{av:'A1956LancamCxaBcoRateioNaturezaDesc',fld:'LANCAMCXABCORATEIONATUREZADESC'},{av:'A1955LancamCxaBcoRateioNaturezaId',fld:'LANCAMCXABCORATEIONATUREZAID'},{av:'A1961LancamCxaBcoRateioValor',fld:'LANCAMCXABCORATEIOVALOR'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV19LancamentoCxaBcoEmpresaid',fld:'vLANCAMENTOCXABCOEMPRESAID',hsh:true},{av:'AV20LancamentoCxaBcoNumero',fld:'vLANCAMENTOCXABCONUMERO',hsh:true},{av:'A1953LancamCxaBcoRateioCCustoDesc',fld:'LANCAMCXABCORATEIOCCUSTODESC'},{av:'A1952LancamCxaBcoRateioCCustoId',fld:'LANCAMCXABCORATEIOCCUSTOID'},{av:'A1957LancamCxaBcoRateioCContabilEmp',fld:'LANCAMCXABCORATEIOCCONTABILEMP'},{av:'A1958LancamCxaBcoRateioCContabilId',fld:'LANCAMCXABCORATEIOCCONTABILID'},{av:'A1956LancamCxaBcoRateioNaturezaDesc',fld:'LANCAMCXABCORATEIONATUREZADESC'},{av:'A1955LancamCxaBcoRateioNaturezaId',fld:'LANCAMCXABCORATEIONATUREZAID'},{av:'A1961LancamCxaBcoRateioValor',fld:'LANCAMCXABCORATEIOVALOR'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'}],[]];
   this.setVCMap("AV19LancamentoCxaBcoEmpresaid", "vLANCAMENTOCXABCOEMPRESAID", 0, "char");
   this.setVCMap("A1953LancamCxaBcoRateioCCustoDesc", "LANCAMCXABCORATEIOCCUSTODESC", 0, "svchar");
   this.setVCMap("A1952LancamCxaBcoRateioCCustoId", "LANCAMCXABCORATEIOCCUSTOID", 0, "svchar");
   this.setVCMap("A1957LancamCxaBcoRateioCContabilEmp", "LANCAMCXABCORATEIOCCONTABILEMP", 0, "char");
   this.setVCMap("A1958LancamCxaBcoRateioCContabilId", "LANCAMCXABCORATEIOCCONTABILID", 0, "svchar");
   this.setVCMap("A1956LancamCxaBcoRateioNaturezaDesc", "LANCAMCXABCORATEIONATUREZADESC", 0, "svchar");
   this.setVCMap("A1955LancamCxaBcoRateioNaturezaId", "LANCAMCXABCORATEIONATUREZAID", 0, "svchar");
   this.setVCMap("A1961LancamCxaBcoRateioValor", "LANCAMCXABCORATEIOVALOR", 0, "decimal");
   this.setVCMap("A1933LancamentoCxaBcoValor", "LANCAMENTOCXABCOVALOR", 0, "decimal");
   this.setVCMap("AV19LancamentoCxaBcoEmpresaid", "vLANCAMENTOCXABCOEMPRESAID", 0, "char");
   this.setVCMap("A1953LancamCxaBcoRateioCCustoDesc", "LANCAMCXABCORATEIOCCUSTODESC", 0, "svchar");
   this.setVCMap("A1952LancamCxaBcoRateioCCustoId", "LANCAMCXABCORATEIOCCUSTOID", 0, "svchar");
   this.setVCMap("A1957LancamCxaBcoRateioCContabilEmp", "LANCAMCXABCORATEIOCCONTABILEMP", 0, "char");
   this.setVCMap("A1958LancamCxaBcoRateioCContabilId", "LANCAMCXABCORATEIOCCONTABILID", 0, "svchar");
   this.setVCMap("A1956LancamCxaBcoRateioNaturezaDesc", "LANCAMCXABCORATEIONATUREZADESC", 0, "svchar");
   this.setVCMap("A1955LancamCxaBcoRateioNaturezaId", "LANCAMCXABCORATEIONATUREZAID", 0, "svchar");
   this.setVCMap("A1961LancamCxaBcoRateioValor", "LANCAMCXABCORATEIOVALOR", 0, "decimal");
   this.setVCMap("A1933LancamentoCxaBcoValor", "LANCAMENTOCXABCOVALOR", 0, "decimal");
   Grid1Container.addRefreshingVar({rfrVar:"AV19LancamentoCxaBcoEmpresaid"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[10]);
   Grid1Container.addRefreshingVar({rfrVar:"A1953LancamCxaBcoRateioCCustoDesc"});
   Grid1Container.addRefreshingVar({rfrVar:"A1952LancamCxaBcoRateioCCustoId"});
   Grid1Container.addRefreshingVar({rfrVar:"A1957LancamCxaBcoRateioCContabilEmp"});
   Grid1Container.addRefreshingVar({rfrVar:"A1958LancamCxaBcoRateioCContabilId"});
   Grid1Container.addRefreshingVar({rfrVar:"A1956LancamCxaBcoRateioNaturezaDesc"});
   Grid1Container.addRefreshingVar({rfrVar:"A1955LancamCxaBcoRateioNaturezaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A1961LancamCxaBcoRateioValor"});
   Grid1Container.addRefreshingVar({rfrVar:"A1933LancamentoCxaBcoValor"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultalanccxabcorateio());
