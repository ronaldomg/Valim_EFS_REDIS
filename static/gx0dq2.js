/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:36:6.0
*/
gx.evt.autoSkip = false;
gx.define('gx0dq2', false, function () {
   this.ServerClass =  "gx0dq2" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV11pSaidaEmpresaId=gx.fn.getControlValue("vPSAIDAEMPRESAID") ;
      this.AV12pSaidaId=gx.fn.getIntegerValue("vPSAIDAID",'.') ;
      this.AV13pSaidaPagtoParcelaSeq=gx.fn.getControlValue("vPSAIDAPAGTOPARCELASEQ") ;
   };
   this.e131qm2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141qm1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,48,49,50,51,52,55];
   this.GXLastCtrlId =55;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0dq2",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(6303,43,"SAIDAPAGTOPARCELASEQ","Sequência do Pgto Saída","","SaidaPagtoParcelaSeq","char",0,"px",3,3,"left",null,[],6303,"SaidaPagtoParcelaSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6238,44,"SAIDAPAGTOPARCELAFORMAEMPID","Empresa Forma de Pagto","","SaidaPagtoParcelaFormaEmpId","char",0,"px",10,10,"left",null,[],6238,"SaidaPagtoParcelaFormaEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6239,45,"SAIDAPAGTOPARCELAFORMAID","Forma Pagto","","SaidaPagtoParcelaFormaId","int",0,"px",3,3,"right",null,[],6239,"SaidaPagtoParcelaFormaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6241,46,"SAIDAPAGTOPARCELAFORMATPCOBR","Tipo Cobrança Forma Pagto","","SaidaPagtoParcelaFormaTpCobr","int",0,"px",3,3,"right",null,[],6241,"SaidaPagtoParcelaFormaTpCobr",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6243,47,"SAIDAPAGTOPARCELAVALOR","Valor da Parcela","","SaidaPagtoParcelaValor","decimal",0,"px",22,22,"right",null,[],6243,"SaidaPagtoParcelaValor",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6244,48,"SAIDAPAGTOPARCELAVENCIMENTO","Vencimento","","SaidaPagtoParcelaVencimento","date",0,"px",10,10,"right",null,[],6244,"SaidaPagtoParcelaVencimento",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6246,49,"SAIDAPAGTOPARCELABANCOID","Banco","","SaidaPagtoParcelaBancoId","int",0,"px",3,3,"right",null,[],6246,"SaidaPagtoParcelaBancoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6248,50,"SAIDAPAGTOPARCELAAGENCIAID","Agência","","SaidaPagtoParcelaAgenciaId","int",0,"px",4,4,"right",null,[],6248,"SaidaPagtoParcelaAgenciaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4306,51,"SAIDAEMPRESAID","Empresa Saída","","SaidaEmpresaId","char",0,"px",10,10,"left",null,[],4306,"SaidaEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4307,52,"SAIDAID","Número da Saída","","SaidaId","int",0,"px",10,10,"right",null,[],4307,"SaidaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKSAIDAPAGTOPARCELASEQ", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAPAGTOPARCELASEQ",gxz:"ZV6cSaidaPagtoParcelaSeq",gxold:"OV6cSaidaPagtoParcelaSeq",gxvar:"AV6cSaidaPagtoParcelaSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cSaidaPagtoParcelaSeq=Value},v2z:function(Value){gx.O.ZV6cSaidaPagtoParcelaSeq=Value},v2c:function(){gx.fn.setControlValue("vCSAIDAPAGTOPARCELASEQ",gx.O.AV6cSaidaPagtoParcelaSeq,0)},c2v:function(){gx.O.AV6cSaidaPagtoParcelaSeq=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDAPAGTOPARCELASEQ")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKSAIDAPAGTOPARCELAFORMAEMPID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAPAGTOPARCELAFORMAEMPID",gxz:"ZV7cSaidaPagtoParcelaFormaEmpId",gxold:"OV7cSaidaPagtoParcelaFormaEmpId",gxvar:"AV7cSaidaPagtoParcelaFormaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cSaidaPagtoParcelaFormaEmpId=Value},v2z:function(Value){gx.O.ZV7cSaidaPagtoParcelaFormaEmpId=Value},v2c:function(){gx.fn.setControlValue("vCSAIDAPAGTOPARCELAFORMAEMPID",gx.O.AV7cSaidaPagtoParcelaFormaEmpId,0)},c2v:function(){gx.O.AV7cSaidaPagtoParcelaFormaEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDAPAGTOPARCELAFORMAEMPID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKSAIDAPAGTOPARCELAFORMAID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAPAGTOPARCELAFORMAID",gxz:"ZV8cSaidaPagtoParcelaFormaId",gxold:"OV8cSaidaPagtoParcelaFormaId",gxvar:"AV8cSaidaPagtoParcelaFormaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cSaidaPagtoParcelaFormaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cSaidaPagtoParcelaFormaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSAIDAPAGTOPARCELAFORMAID",gx.O.AV8cSaidaPagtoParcelaFormaId,0)},c2v:function(){gx.O.AV8cSaidaPagtoParcelaFormaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSAIDAPAGTOPARCELAFORMAID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKSAIDAPAGTOPARCELAFORMATPCOBR", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAPAGTOPARCELAFORMATPCOBR",gxz:"ZV9cSaidaPagtoParcelaFormaTpCobr",gxold:"OV9cSaidaPagtoParcelaFormaTpCobr",gxvar:"AV9cSaidaPagtoParcelaFormaTpCobr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cSaidaPagtoParcelaFormaTpCobr=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cSaidaPagtoParcelaFormaTpCobr=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSAIDAPAGTOPARCELAFORMATPCOBR",gx.O.AV9cSaidaPagtoParcelaFormaTpCobr,0)},c2v:function(){gx.O.AV9cSaidaPagtoParcelaFormaTpCobr=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSAIDAPAGTOPARCELAFORMATPCOBR",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKSAIDAPAGTOPARCELAVALOR", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAPAGTOPARCELAVALOR",gxz:"ZV10cSaidaPagtoParcelaValor",gxold:"OV10cSaidaPagtoParcelaValor",gxvar:"AV10cSaidaPagtoParcelaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cSaidaPagtoParcelaValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV10cSaidaPagtoParcelaValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCSAIDAPAGTOPARCELAVALOR",gx.O.AV10cSaidaPagtoParcelaValor,2,',')},c2v:function(){gx.O.AV10cSaidaPagtoParcelaValor=this.val()},val:function(){return gx.fn.getDecimalValue("vCSAIDAPAGTOPARCELAVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAPAGTOPARCELASEQ",gxz:"Z6303SaidaPagtoParcelaSeq",gxold:"O6303SaidaPagtoParcelaSeq",gxvar:"A6303SaidaPagtoParcelaSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6303SaidaPagtoParcelaSeq=Value},v2z:function(Value){gx.O.Z6303SaidaPagtoParcelaSeq=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAPAGTOPARCELASEQ",row || gx.fn.currentGridRowImpl(41),gx.O.A6303SaidaPagtoParcelaSeq,0)},c2v:function(){gx.O.A6303SaidaPagtoParcelaSeq=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAPAGTOPARCELASEQ",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAPAGTOPARCELAFORMAEMPID",gxz:"Z6238SaidaPagtoParcelaFormaEmpId",gxold:"O6238SaidaPagtoParcelaFormaEmpId",gxvar:"A6238SaidaPagtoParcelaFormaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6238SaidaPagtoParcelaFormaEmpId=Value},v2z:function(Value){gx.O.Z6238SaidaPagtoParcelaFormaEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAPAGTOPARCELAFORMAEMPID",row || gx.fn.currentGridRowImpl(41),gx.O.A6238SaidaPagtoParcelaFormaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6238SaidaPagtoParcelaFormaEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAPAGTOPARCELAFORMAEMPID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAPAGTOPARCELAFORMAID",gxz:"Z6239SaidaPagtoParcelaFormaId",gxold:"O6239SaidaPagtoParcelaFormaId",gxvar:"A6239SaidaPagtoParcelaFormaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6239SaidaPagtoParcelaFormaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6239SaidaPagtoParcelaFormaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAPAGTOPARCELAFORMAID",row || gx.fn.currentGridRowImpl(41),gx.O.A6239SaidaPagtoParcelaFormaId,0)},c2v:function(){gx.O.A6239SaidaPagtoParcelaFormaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAPAGTOPARCELAFORMAID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAPAGTOPARCELAFORMATPCOBR",gxz:"Z6241SaidaPagtoParcelaFormaTpCobr",gxold:"O6241SaidaPagtoParcelaFormaTpCobr",gxvar:"A6241SaidaPagtoParcelaFormaTpCobr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6241SaidaPagtoParcelaFormaTpCobr=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6241SaidaPagtoParcelaFormaTpCobr=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAPAGTOPARCELAFORMATPCOBR",row || gx.fn.currentGridRowImpl(41),gx.O.A6241SaidaPagtoParcelaFormaTpCobr,0)},c2v:function(){gx.O.A6241SaidaPagtoParcelaFormaTpCobr=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAPAGTOPARCELAFORMATPCOBR",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAPAGTOPARCELAVALOR",gxz:"Z6243SaidaPagtoParcelaValor",gxold:"O6243SaidaPagtoParcelaValor",gxvar:"A6243SaidaPagtoParcelaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6243SaidaPagtoParcelaValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z6243SaidaPagtoParcelaValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("SAIDAPAGTOPARCELAVALOR",row || gx.fn.currentGridRowImpl(41),gx.O.A6243SaidaPagtoParcelaValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6243SaidaPagtoParcelaValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("SAIDAPAGTOPARCELAVALOR",row || gx.fn.currentGridRowImpl(41),'.',',')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAPAGTOPARCELAVENCIMENTO",gxz:"Z6244SaidaPagtoParcelaVencimento",gxold:"O6244SaidaPagtoParcelaVencimento",gxvar:"A6244SaidaPagtoParcelaVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6244SaidaPagtoParcelaVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6244SaidaPagtoParcelaVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAPAGTOPARCELAVENCIMENTO",row || gx.fn.currentGridRowImpl(41),gx.O.A6244SaidaPagtoParcelaVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6244SaidaPagtoParcelaVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("SAIDAPAGTOPARCELAVENCIMENTO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAPAGTOPARCELABANCOID",gxz:"Z6246SaidaPagtoParcelaBancoId",gxold:"O6246SaidaPagtoParcelaBancoId",gxvar:"A6246SaidaPagtoParcelaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6246SaidaPagtoParcelaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6246SaidaPagtoParcelaBancoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAPAGTOPARCELABANCOID",row || gx.fn.currentGridRowImpl(41),gx.O.A6246SaidaPagtoParcelaBancoId,0)},c2v:function(){gx.O.A6246SaidaPagtoParcelaBancoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAPAGTOPARCELABANCOID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAPAGTOPARCELAAGENCIAID",gxz:"Z6248SaidaPagtoParcelaAgenciaId",gxold:"O6248SaidaPagtoParcelaAgenciaId",gxvar:"A6248SaidaPagtoParcelaAgenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6248SaidaPagtoParcelaAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6248SaidaPagtoParcelaAgenciaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAPAGTOPARCELAAGENCIAID",row || gx.fn.currentGridRowImpl(41),gx.O.A6248SaidaPagtoParcelaAgenciaId,0)},c2v:function(){gx.O.A6248SaidaPagtoParcelaAgenciaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAPAGTOPARCELAAGENCIAID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAEMPRESAID",gxz:"Z4306SaidaEmpresaId",gxold:"O4306SaidaEmpresaId",gxvar:"A4306SaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4306SaidaEmpresaId=Value},v2z:function(Value){gx.O.Z4306SaidaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A4306SaidaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4306SaidaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAID",gxz:"Z4307SaidaId",gxold:"O4307SaidaId",gxvar:"A4307SaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4307SaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4307SaidaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAID",row || gx.fn.currentGridRowImpl(41),gx.O.A4307SaidaId,0)},c2v:function(){gx.O.A4307SaidaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TABLE4",grid:0};
   this.AV6cSaidaPagtoParcelaSeq = "" ;
   this.ZV6cSaidaPagtoParcelaSeq = "" ;
   this.OV6cSaidaPagtoParcelaSeq = "" ;
   this.AV7cSaidaPagtoParcelaFormaEmpId = "" ;
   this.ZV7cSaidaPagtoParcelaFormaEmpId = "" ;
   this.OV7cSaidaPagtoParcelaFormaEmpId = "" ;
   this.AV8cSaidaPagtoParcelaFormaId = 0 ;
   this.ZV8cSaidaPagtoParcelaFormaId = 0 ;
   this.OV8cSaidaPagtoParcelaFormaId = 0 ;
   this.AV9cSaidaPagtoParcelaFormaTpCobr = 0 ;
   this.ZV9cSaidaPagtoParcelaFormaTpCobr = 0 ;
   this.OV9cSaidaPagtoParcelaFormaTpCobr = 0 ;
   this.AV10cSaidaPagtoParcelaValor = 0 ;
   this.ZV10cSaidaPagtoParcelaValor = 0 ;
   this.OV10cSaidaPagtoParcelaValor = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z6303SaidaPagtoParcelaSeq = "" ;
   this.O6303SaidaPagtoParcelaSeq = "" ;
   this.Z6238SaidaPagtoParcelaFormaEmpId = "" ;
   this.O6238SaidaPagtoParcelaFormaEmpId = "" ;
   this.Z6239SaidaPagtoParcelaFormaId = 0 ;
   this.O6239SaidaPagtoParcelaFormaId = 0 ;
   this.Z6241SaidaPagtoParcelaFormaTpCobr = 0 ;
   this.O6241SaidaPagtoParcelaFormaTpCobr = 0 ;
   this.Z6243SaidaPagtoParcelaValor = 0 ;
   this.O6243SaidaPagtoParcelaValor = 0 ;
   this.Z6244SaidaPagtoParcelaVencimento = gx.date.nullDate() ;
   this.O6244SaidaPagtoParcelaVencimento = gx.date.nullDate() ;
   this.Z6246SaidaPagtoParcelaBancoId = 0 ;
   this.O6246SaidaPagtoParcelaBancoId = 0 ;
   this.Z6248SaidaPagtoParcelaAgenciaId = 0 ;
   this.O6248SaidaPagtoParcelaAgenciaId = 0 ;
   this.Z4306SaidaEmpresaId = "" ;
   this.O4306SaidaEmpresaId = "" ;
   this.Z4307SaidaId = 0 ;
   this.O4307SaidaId = 0 ;
   this.AV6cSaidaPagtoParcelaSeq = "" ;
   this.AV7cSaidaPagtoParcelaFormaEmpId = "" ;
   this.AV8cSaidaPagtoParcelaFormaId = 0 ;
   this.AV9cSaidaPagtoParcelaFormaTpCobr = 0 ;
   this.AV10cSaidaPagtoParcelaValor = 0 ;
   this.AV11pSaidaEmpresaId = "" ;
   this.AV12pSaidaId = 0 ;
   this.AV13pSaidaPagtoParcelaSeq = "" ;
   this.AV5LinkSelection = "" ;
   this.A6303SaidaPagtoParcelaSeq = "" ;
   this.A6238SaidaPagtoParcelaFormaEmpId = "" ;
   this.A6239SaidaPagtoParcelaFormaId = 0 ;
   this.A6241SaidaPagtoParcelaFormaTpCobr = 0 ;
   this.A6243SaidaPagtoParcelaValor = 0 ;
   this.A6244SaidaPagtoParcelaVencimento = gx.date.nullDate() ;
   this.A6246SaidaPagtoParcelaBancoId = 0 ;
   this.A6248SaidaPagtoParcelaAgenciaId = 0 ;
   this.A4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.Events = {"e131qm2_client": ["ENTER", true] ,"e141qm1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaPagtoParcelaSeq',fld:'vCSAIDAPAGTOPARCELASEQ'},{av:'AV7cSaidaPagtoParcelaFormaEmpId',fld:'vCSAIDAPAGTOPARCELAFORMAEMPID'},{av:'AV8cSaidaPagtoParcelaFormaId',fld:'vCSAIDAPAGTOPARCELAFORMAID'},{av:'AV9cSaidaPagtoParcelaFormaTpCobr',fld:'vCSAIDAPAGTOPARCELAFORMATPCOBR'},{av:'AV10cSaidaPagtoParcelaValor',fld:'vCSAIDAPAGTOPARCELAVALOR'},{av:'AV11pSaidaEmpresaId',fld:'vPSAIDAEMPRESAID',hsh:true},{av:'AV12pSaidaId',fld:'vPSAIDAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A6303SaidaPagtoParcelaSeq',fld:'SAIDAPAGTOPARCELASEQ'}],[{av:'AV13pSaidaPagtoParcelaSeq',fld:'vPSAIDAPAGTOPARCELASEQ'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaPagtoParcelaSeq',fld:'vCSAIDAPAGTOPARCELASEQ'},{av:'AV7cSaidaPagtoParcelaFormaEmpId',fld:'vCSAIDAPAGTOPARCELAFORMAEMPID'},{av:'AV8cSaidaPagtoParcelaFormaId',fld:'vCSAIDAPAGTOPARCELAFORMAID'},{av:'AV9cSaidaPagtoParcelaFormaTpCobr',fld:'vCSAIDAPAGTOPARCELAFORMATPCOBR'},{av:'AV10cSaidaPagtoParcelaValor',fld:'vCSAIDAPAGTOPARCELAVALOR'},{av:'AV11pSaidaEmpresaId',fld:'vPSAIDAEMPRESAID',hsh:true},{av:'AV12pSaidaId',fld:'vPSAIDAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaPagtoParcelaSeq',fld:'vCSAIDAPAGTOPARCELASEQ'},{av:'AV7cSaidaPagtoParcelaFormaEmpId',fld:'vCSAIDAPAGTOPARCELAFORMAEMPID'},{av:'AV8cSaidaPagtoParcelaFormaId',fld:'vCSAIDAPAGTOPARCELAFORMAID'},{av:'AV9cSaidaPagtoParcelaFormaTpCobr',fld:'vCSAIDAPAGTOPARCELAFORMATPCOBR'},{av:'AV10cSaidaPagtoParcelaValor',fld:'vCSAIDAPAGTOPARCELAVALOR'},{av:'AV11pSaidaEmpresaId',fld:'vPSAIDAEMPRESAID',hsh:true},{av:'AV12pSaidaId',fld:'vPSAIDAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaPagtoParcelaSeq',fld:'vCSAIDAPAGTOPARCELASEQ'},{av:'AV7cSaidaPagtoParcelaFormaEmpId',fld:'vCSAIDAPAGTOPARCELAFORMAEMPID'},{av:'AV8cSaidaPagtoParcelaFormaId',fld:'vCSAIDAPAGTOPARCELAFORMAID'},{av:'AV9cSaidaPagtoParcelaFormaTpCobr',fld:'vCSAIDAPAGTOPARCELAFORMATPCOBR'},{av:'AV10cSaidaPagtoParcelaValor',fld:'vCSAIDAPAGTOPARCELAVALOR'},{av:'AV11pSaidaEmpresaId',fld:'vPSAIDAEMPRESAID',hsh:true},{av:'AV12pSaidaId',fld:'vPSAIDAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaPagtoParcelaSeq',fld:'vCSAIDAPAGTOPARCELASEQ'},{av:'AV7cSaidaPagtoParcelaFormaEmpId',fld:'vCSAIDAPAGTOPARCELAFORMAEMPID'},{av:'AV8cSaidaPagtoParcelaFormaId',fld:'vCSAIDAPAGTOPARCELAFORMAID'},{av:'AV9cSaidaPagtoParcelaFormaTpCobr',fld:'vCSAIDAPAGTOPARCELAFORMATPCOBR'},{av:'AV10cSaidaPagtoParcelaValor',fld:'vCSAIDAPAGTOPARCELAVALOR'},{av:'AV11pSaidaEmpresaId',fld:'vPSAIDAEMPRESAID',hsh:true},{av:'AV12pSaidaId',fld:'vPSAIDAID',hsh:true}],[]];
   this.setVCMap("AV11pSaidaEmpresaId", "vPSAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV12pSaidaId", "vPSAIDAID", 0, "int");
   this.setVCMap("AV13pSaidaPagtoParcelaSeq", "vPSAIDAPAGTOPARCELASEQ", 0, "char");
   this.setVCMap("AV11pSaidaEmpresaId", "vPSAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV12pSaidaId", "vPSAIDAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar({rfrVar:"AV11pSaidaEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV12pSaidaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0dq2());
