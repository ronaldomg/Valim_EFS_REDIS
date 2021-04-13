/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:46:7.93
*/
gx.evt.autoSkip = false;
gx.define('hcontasemaberto', false, function () {
   this.ServerClass =  "hcontasemaberto" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV38ContaPagRecEmpresaId=gx.fn.getControlValue("vCONTAPAGRECEMPRESAID") ;
      this.AV34SdtCli=gx.fn.getControlValue("vSDTCLI") ;
   };
   this.Validv_Clienteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLIENTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pessoaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e231ga1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hparametroscontasemaberto",[]), []);
      this.refreshOutputs([]);
   };
   this.e111ga2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e121ga2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131ga2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e141ga2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e151ga2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e161ga2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e191ga2_client=function()
   {
      this.executeServerEvent("'DETALHARCONTAS'", true, arguments[0], false, false);
   };
   this.e201ga2_client=function()
   {
      this.executeServerEvent("'REGISTRAROCORRENCIA'", true, arguments[0], false, false);
   };
   this.e211ga2_client=function()
   {
      this.executeServerEvent("'CONSULTARDADOSCLIENTE'", true, arguments[0], false, false);
   };
   this.e241ga2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e251ga2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,19,22,24,28,36,37,38,39,40,41,42,43,44,50,54,57,59,61,63,65,66,67,68,69,70,71,72,74,75,76];
   this.GXLastCtrlId =76;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",35,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hcontasemaberto",[],false,1,true,true,0,false,false,false,"CollSdtCli.SdtCliItem",0,"px","Novo registro",true,false,false,null,null,false,"AV34SdtCli",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV110",36,"CTLPESSOAID","Código","","PessoaId","int",0,"px",7,7,"right",null,[],"GXV110","GXV110",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV111",37,"CTLPESSOAFANTASIA","Nome Cliente","","PessoaFantasia","svchar",0,"px",60,60,"left",null,[],"GXV111","GXV111",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV112",38,"CTLTELEFONE","Telefone","","Telefone","svchar",0,"px",15,15,"left",null,[],"GXV112","GXV112",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV113",39,"CTLQTDECONTAS","Qtde Contas","","QtdeContas","int",0,"px",6,6,"right",null,[],"GXV113","GXV113",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV114",40,"CTLVLRCONTAS","Valor em Aberto","","VlrContas","decimal",0,"px",22,22,"right",null,[],"GXV114","GXV114",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV115",41,"CTLDTPRIVENCMTO","Dt Pri Vencmto","","DtPriVencmto","date",0,"px",10,10,"right",null,[],"GXV115","GXV115",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",42,0,"px",17,"px","e191ga2_client","","Con","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpoco","vBMPOCO",43,0,"px",17,"px","e201ga2_client","","Oco","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcad","vBMPCAD",44,0,"px",17,"px","e211ga2_client","","Cad","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTREFERENCIA",gxz:"ZV31DtReferencia",gxold:"OV31DtReferencia",gxvar:"AV31DtReferencia",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31DtReferencia=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV31DtReferencia=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTREFERENCIA",gx.O.AV31DtReferencia,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV31DtReferencia=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTREFERENCIA")},nac:gx.falseFn};
   this.declareDomainHdlr( 13 , function() {
   });
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Clienteid,isvalid:null,rgrid:[],fld:"vCLIENTEID",gxz:"ZV32ClienteId",gxold:"OV32ClienteId",gxvar:"AV32ClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32ClienteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLIENTEID",gx.O.AV32ClienteId,0)},c2v:function(){gx.O.AV32ClienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLIENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTEFANTASIA",gxz:"ZV40ClienteFantasia",gxold:"OV40ClienteFantasia",gxvar:"AV40ClienteFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40ClienteFantasia=Value},v2z:function(Value){gx.O.ZV40ClienteFantasia=Value},v2c:function(){gx.fn.setControlValue("vCLIENTEFANTASIA",gx.O.AV40ClienteFantasia,0)},c2v:function(){gx.O.AV40ClienteFantasia=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTEFANTASIA")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSTCLIENTE",gxz:"ZV33StCliente",gxold:"OV33StCliente",gxvar:"AV33StCliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV33StCliente=Value},v2z:function(Value){gx.O.ZV33StCliente=Value},v2c:function(){gx.fn.setComboBoxValue("vSTCLIENTE",gx.O.AV33StCliente)},c2v:function(){gx.O.AV33StCliente=this.val()},val:function(){return gx.fn.getControlValue("vSTCLIENTE")},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONSIDERARPARAMETROS",gxz:"ZV30ConsiderarParametros",gxold:"OV30ConsiderarParametros",gxvar:"AV30ConsiderarParametros",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV30ConsiderarParametros=Value},v2z:function(Value){gx.O.ZV30ConsiderarParametros=Value},v2c:function(){gx.fn.setCheckBoxValue("vCONSIDERARPARAMETROS",gx.O.AV30ConsiderarParametros,"S")},c2v:function(){gx.O.AV30ConsiderarParametros=this.val()},val:function(){return gx.fn.getControlValue("vCONSIDERARPARAMETROS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[36]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:35,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAID",gxz:"ZV52GXV110",gxold:"OV52GXV110",gxvar:"GXV110",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV110=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV52GXV110=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAID",row || gx.fn.currentGridRowImpl(35),gx.O.GXV110,0)},c2v:function(){gx.O.GXV110=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPESSOAID",row || gx.fn.currentGridRowImpl(35),'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:35,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAFANTASIA",gxz:"ZV53GXV111",gxold:"OV53GXV111",gxvar:"GXV111",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV111=Value},v2z:function(Value){gx.O.ZV53GXV111=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(35),gx.O.GXV111,0)},c2v:function(){gx.O.GXV111=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:35,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTELEFONE",gxz:"ZV54GXV112",gxold:"OV54GXV112",gxvar:"GXV112",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV112=Value},v2z:function(Value){gx.O.ZV54GXV112=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTELEFONE",row || gx.fn.currentGridRowImpl(35),gx.O.GXV112,0)},c2v:function(){gx.O.GXV112=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTELEFONE",row || gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:0,grid:35,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLQTDECONTAS",gxz:"ZV55GXV113",gxold:"OV55GXV113",gxvar:"GXV113",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV113=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55GXV113=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLQTDECONTAS",row || gx.fn.currentGridRowImpl(35),gx.O.GXV113,0)},c2v:function(){gx.O.GXV113=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLQTDECONTAS",row || gx.fn.currentGridRowImpl(35),'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:35,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVLRCONTAS",gxz:"ZV56GXV114",gxold:"OV56GXV114",gxvar:"GXV114",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV114=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV56GXV114=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVLRCONTAS",row || gx.fn.currentGridRowImpl(35),gx.O.GXV114,2,',')},c2v:function(){gx.O.GXV114=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVLRCONTAS",row || gx.fn.currentGridRowImpl(35),'.',',')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:35,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDTPRIVENCMTO",gxz:"ZV57GXV115",gxold:"OV57GXV115",gxvar:"GXV115",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV115=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV57GXV115=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLDTPRIVENCMTO",row || gx.fn.currentGridRowImpl(35),gx.O.GXV115,0)},c2v:function(){gx.O.GXV115=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLDTPRIVENCMTO",row || gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:35,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(35),gx.O.AV16bmpCon,gx.O.AV60Bmpcon_GXI)},c2v:function(){gx.O.AV60Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(35))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(35))}, gxvar_GXI:'AV60Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:35,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPOCO",gxz:"ZV43bmpOco",gxold:"OV43bmpOco",gxvar:"AV43bmpOco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV43bmpOco=Value},v2z:function(Value){gx.O.ZV43bmpOco=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPOCO",row || gx.fn.currentGridRowImpl(35),gx.O.AV43bmpOco,gx.O.AV61Bmpoco_GXI)},c2v:function(){gx.O.AV61Bmpoco_GXI=this.val_GXI();gx.O.AV43bmpOco=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPOCO",row || gx.fn.currentGridRowImpl(35))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPOCO_GXI",row || gx.fn.currentGridRowImpl(35))}, gxvar_GXI:'AV61Bmpoco_GXI',nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:35,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCAD",gxz:"ZV44bmpCad",gxold:"OV44bmpCad",gxvar:"AV44bmpCad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV44bmpCad=Value},v2z:function(Value){gx.O.ZV44bmpCad=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCAD",row || gx.fn.currentGridRowImpl(35),gx.O.AV44bmpCad,gx.O.AV62Bmpcad_GXI)},c2v:function(){gx.O.AV62Bmpcad_GXI=this.val_GXI();gx.O.AV44bmpCad=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCAD",row || gx.fn.currentGridRowImpl(35))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCAD_GXI",row || gx.fn.currentGridRowImpl(35))}, gxvar_GXI:'AV62Bmpcad_GXI',nac:gx.falseFn};
   GXValidFnc[50]={fld:"TABLE6",grid:0};
   GXValidFnc[54]={fld:"TABLE7",grid:0};
   GXValidFnc[57]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[59]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[61]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[63]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[65]={fld:"IMAGE5",grid:0};
   GXValidFnc[66]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV25Nao",gxold:"OV25Nao",gxvar:"AV25Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25Nao=Value},v2z:function(Value){gx.O.ZV25Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV25Nao,0)},c2v:function(){gx.O.AV25Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV24Sim",gxold:"OV24Sim",gxvar:"AV24Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24Sim=Value},v2z:function(Value){gx.O.ZV24Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV24Sim,0)},c2v:function(){gx.O.AV24Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARAC",gxz:"ZV41QtdeCarac",gxold:"OV41QtdeCarac",gxvar:"AV41QtdeCarac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41QtdeCarac=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41QtdeCarac=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARAC",gx.O.AV41QtdeCarac,0)},c2v:function(){gx.O.AV41QtdeCarac=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARAC",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCTRLPAGINA",gxz:"ZV37CtrlPagina",gxold:"OV37CtrlPagina",gxvar:"AV37CtrlPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37CtrlPagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37CtrlPagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTRLPAGINA",gx.O.AV37CtrlPagina,0)},c2v:function(){gx.O.AV37CtrlPagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTRLPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV5Pagina,0)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV39PessoaEmpresaId",gxold:"OV39PessoaEmpresaId",gxvar:"AV39PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV39PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV39PessoaEmpresaId,0)},c2v:function(){gx.O.AV39PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"JS", format:2,grid:0};
   GXValidFnc[74]={fld:"BTNPARAMETROS",grid:0};
   GXValidFnc[75]={fld:"BTNHELP",grid:0};
   GXValidFnc[76]={fld:"PROMPT_CLIENTEID",grid:0};
   this.AV31DtReferencia = gx.date.nullDate() ;
   this.ZV31DtReferencia = gx.date.nullDate() ;
   this.OV31DtReferencia = gx.date.nullDate() ;
   this.AV32ClienteId = 0 ;
   this.ZV32ClienteId = 0 ;
   this.OV32ClienteId = 0 ;
   this.AV40ClienteFantasia = "" ;
   this.ZV40ClienteFantasia = "" ;
   this.OV40ClienteFantasia = "" ;
   this.AV33StCliente = "" ;
   this.ZV33StCliente = "" ;
   this.OV33StCliente = "" ;
   this.AV30ConsiderarParametros = "" ;
   this.ZV30ConsiderarParametros = "" ;
   this.OV30ConsiderarParametros = "" ;
   this.ZV52GXV110 = 0 ;
   this.OV52GXV110 = 0 ;
   this.ZV53GXV111 = "" ;
   this.OV53GXV111 = "" ;
   this.ZV54GXV112 = "" ;
   this.OV54GXV112 = "" ;
   this.ZV55GXV113 = 0 ;
   this.OV55GXV113 = 0 ;
   this.ZV56GXV114 = 0 ;
   this.OV56GXV114 = 0 ;
   this.ZV57GXV115 = gx.date.nullDate() ;
   this.OV57GXV115 = gx.date.nullDate() ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.ZV43bmpOco = "" ;
   this.OV43bmpOco = "" ;
   this.ZV44bmpCad = "" ;
   this.OV44bmpCad = "" ;
   this.AV25Nao = "" ;
   this.ZV25Nao = "" ;
   this.OV25Nao = "" ;
   this.AV24Sim = "" ;
   this.ZV24Sim = "" ;
   this.OV24Sim = "" ;
   this.AV41QtdeCarac = 0 ;
   this.ZV41QtdeCarac = 0 ;
   this.OV41QtdeCarac = 0 ;
   this.AV37CtrlPagina = 0 ;
   this.ZV37CtrlPagina = 0 ;
   this.OV37CtrlPagina = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV39PessoaEmpresaId = "" ;
   this.ZV39PessoaEmpresaId = "" ;
   this.OV39PessoaEmpresaId = "" ;
   this.AV31DtReferencia = gx.date.nullDate() ;
   this.AV32ClienteId = 0 ;
   this.AV40ClienteFantasia = "" ;
   this.AV33StCliente = "" ;
   this.AV30ConsiderarParametros = "" ;
   this.AV25Nao = "" ;
   this.AV24Sim = "" ;
   this.AV41QtdeCarac = 0 ;
   this.AV37CtrlPagina = 0 ;
   this.AV5Pagina = 0 ;
   this.AV39PessoaEmpresaId = "" ;
   this.GXV110 = 0 ;
   this.GXV111 = "" ;
   this.GXV112 = "" ;
   this.GXV113 = 0 ;
   this.GXV114 = 0 ;
   this.GXV115 = gx.date.nullDate() ;
   this.AV16bmpCon = "" ;
   this.AV43bmpOco = "" ;
   this.AV44bmpCad = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A445PessoaCliente = "" ;
   this.A446PessoaFornecedor = "" ;
   this.A449PessoaFabricante = "" ;
   this.AV38ContaPagRecEmpresaId = "" ;
   this.AV34SdtCli = [ ] ;
   this.Events = {"e111ga2_client": ["'GXM_FIRST'", true] ,"e121ga2_client": ["'GXM_PREVIOUS'", true] ,"e131ga2_client": ["'PROXIMO'", true] ,"e141ga2_client": ["'GXM_LAST'", true] ,"e151ga2_client": ["'PROCURAR'", true] ,"e161ga2_client": ["'FECHAR'", true] ,"e191ga2_client": ["'DETALHARCONTAS'", true] ,"e201ga2_client": ["'REGISTRAROCORRENCIA'", true] ,"e211ga2_client": ["'CONSULTARDADOSCLIENTE'", true] ,"e241ga2_client": ["ENTER", true] ,"e251ga2_client": ["CANCEL", true] ,"e231ga1_client": ["'PARAMETROSSELECAO'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV43bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV44bmpCad',fld:'vBMPCAD'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Tooltiptext")',ctrl:'vBMPCAD',prop:'Tooltiptext'},{av:'AV38ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'AV34SdtCli',fld:'vSDTCLI',grid:35},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV37CtrlPagina',fld:'vCTRLPAGINA'}],[{av:'AV48filtros',fld:'vFILTROS'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV37CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV31DtReferencia',fld:'vDTREFERENCIA'},{av:'AV32ClienteId',fld:'vCLIENTEID'},{av:'AV40ClienteFantasia',fld:'vCLIENTEFANTASIA'},{av:'AV33StCliente',fld:'vSTCLIENTE'},{av:'AV30ConsiderarParametros',fld:'vCONSIDERARPARAMETROS'},{av:'AV34SdtCli',fld:'vSDTCLI',grid:35},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV43bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV44bmpCad',fld:'vBMPCAD'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Tooltiptext")',ctrl:'vBMPCAD',prop:'Tooltiptext'},{av:'AV38ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'AV34SdtCli',fld:'vSDTCLI',grid:35},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV37CtrlPagina',fld:'vCTRLPAGINA'}],[{av:'AV37CtrlPagina',fld:'vCTRLPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV43bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV44bmpCad',fld:'vBMPCAD'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Tooltiptext")',ctrl:'vBMPCAD',prop:'Tooltiptext'},{av:'AV38ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'AV34SdtCli',fld:'vSDTCLI',grid:35},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV37CtrlPagina',fld:'vCTRLPAGINA'}],[{av:'AV37CtrlPagina',fld:'vCTRLPAGINA'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV43bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV44bmpCad',fld:'vBMPCAD'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Tooltiptext")',ctrl:'vBMPCAD',prop:'Tooltiptext'},{av:'AV38ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'AV34SdtCli',fld:'vSDTCLI',grid:35},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV37CtrlPagina',fld:'vCTRLPAGINA'}],[{av:'AV37CtrlPagina',fld:'vCTRLPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV43bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV44bmpCad',fld:'vBMPCAD'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Tooltiptext")',ctrl:'vBMPCAD',prop:'Tooltiptext'},{av:'AV38ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'AV34SdtCli',fld:'vSDTCLI',grid:35},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV37CtrlPagina',fld:'vCTRLPAGINA'}],[{av:'AV37CtrlPagina',fld:'vCTRLPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV43bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV44bmpCad',fld:'vBMPCAD'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Tooltiptext")',ctrl:'vBMPCAD',prop:'Tooltiptext'},{av:'AV38ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'AV34SdtCli',fld:'vSDTCLI',grid:35},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV37CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV23TpErro',fld:'vTPERRO'},{av:'AV31DtReferencia',fld:'vDTREFERENCIA'},{av:'AV32ClienteId',fld:'vCLIENTEID'},{av:'AV33StCliente',fld:'vSTCLIENTE'},{av:'AV30ConsiderarParametros',fld:'vCONSIDERARPARAMETROS'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV39PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'}],[{av:'AV34SdtCli',fld:'vSDTCLI',grid:35},{av:'AV35Res',fld:'vRES'},{av:'AV36ResInt',fld:'vRESINT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV37CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV23TpErro',fld:'vTPERRO'},{av:'AV63GXLvl165',fld:'vGXLVL165'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PARAMETROSSELECAO'"] = [[],[]];
   this.EvtParms["'DETALHARCONTAS'"] = [[{av:'AV34SdtCli',fld:'vSDTCLI',grid:35}],[]];
   this.EvtParms["'REGISTRAROCORRENCIA'"] = [[{av:'AV34SdtCli',fld:'vSDTCLI',grid:35},{av:'AV30ConsiderarParametros',fld:'vCONSIDERARPARAMETROS'}],[]];
   this.EvtParms["'CONSULTARDADOSCLIENTE'"] = [[{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV39PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV34SdtCli',fld:'vSDTCLI',grid:35},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A449PessoaFabricante',fld:'PESSOAFABRICANTE'},{av:'AV9UsrCod',fld:'vUSRCOD'},{av:'AV14MsgErro',fld:'vMSGERRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV37CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV31DtReferencia',fld:'vDTREFERENCIA'},{av:'AV32ClienteId',fld:'vCLIENTEID'},{av:'AV40ClienteFantasia',fld:'vCLIENTEFANTASIA'},{av:'AV33StCliente',fld:'vSTCLIENTE'},{av:'AV30ConsiderarParametros',fld:'vCONSIDERARPARAMETROS'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV43bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV44bmpCad',fld:'vBMPCAD'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Tooltiptext")',ctrl:'vBMPCAD',prop:'Tooltiptext'},{av:'AV38ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'}],[{av:'AV45SnCliente',fld:'vSNCLIENTE'},{av:'AV46SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV47SnFabricante',fld:'vSNFABRICANTE'},{av:'AV14MsgErro',fld:'vMSGERRO'},{av:'AV34SdtCli',fld:'vSDTCLI',grid:35},{av:'AV48filtros',fld:'vFILTROS'}]];
   this.setPrompt("PROMPT_CLIENTEID", [18]);
   this.setVCMap("AV38ContaPagRecEmpresaId", "vCONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV34SdtCli", "vSDTCLI", 0, "CollSdtCli.SdtCliItem");
   this.setVCMap("AV38ContaPagRecEmpresaId", "vCONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV34SdtCli", "vSDTCLI", 0, "CollSdtCli.SdtCliItem");
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV43bmpOco", rfrProp:"Value", gxAttId:"Bmpoco"});
   GridContainer.addRefreshingVar({rfrVar:"AV43bmpOco", rfrProp:"Tooltiptext", gxAttId:"Bmpoco"});
   GridContainer.addRefreshingVar({rfrVar:"AV44bmpCad", rfrProp:"Value", gxAttId:"Bmpcad"});
   GridContainer.addRefreshingVar({rfrVar:"AV44bmpCad", rfrProp:"Tooltiptext", gxAttId:"Bmpcad"});
   GridContainer.addRefreshingVar({rfrVar:"AV38ContaPagRecEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV34SdtCli"});
   GridContainer.addRefreshingVar(this.GXValidFnc[70]);
   GridContainer.addRefreshingVar(this.GXValidFnc[69]);
   this.addGridBCProperty("Sdtcli", ["PessoaId"], this.GXValidFnc[36], "AV34SdtCli");
   this.addGridBCProperty("Sdtcli", ["PessoaFantasia"], this.GXValidFnc[37], "AV34SdtCli");
   this.addGridBCProperty("Sdtcli", ["Telefone"], this.GXValidFnc[38], "AV34SdtCli");
   this.addGridBCProperty("Sdtcli", ["QtdeContas"], this.GXValidFnc[39], "AV34SdtCli");
   this.addGridBCProperty("Sdtcli", ["VlrContas"], this.GXValidFnc[40], "AV34SdtCli");
   this.addGridBCProperty("Sdtcli", ["DtPriVencmto"], this.GXValidFnc[41], "AV34SdtCli");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcontasemaberto());
