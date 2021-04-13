/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:51:25.94
*/
gx.evt.autoSkip = false;
gx.define('himplantarcontabilidade', false, function () {
   this.ServerClass =  "himplantarcontabilidade" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e132d2_client=function()
   {
      this.executeServerEvent("'DIALOG'", true, null, false, false);
   };
   this.e112d2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e142d2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e172d2_client=function()
   {
      this.executeServerEvent("VTIPOIMPLANTACAO.CLICK", true, null, false, true);
   };
   this.e182d2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,18,20,23,25,28,30,33,35,40,43,53,55,57,60,62,66,75,84,93,102,111,122,128,130];
   this.GXLastCtrlId =130;
   GXValidFnc[2]={fld:"TABLE9",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE11",grid:0};
   GXValidFnc[11]={fld:"TABLE13",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOIMPLANTACAO",gxz:"ZV15TipoImplantacao",gxold:"OV15TipoImplantacao",gxvar:"AV15TipoImplantacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV15TipoImplantacao=Value},v2z:function(Value){gx.O.ZV15TipoImplantacao=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOIMPLANTACAO",gx.O.AV15TipoImplantacao)},c2v:function(){gx.O.AV15TipoImplantacao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOIMPLANTACAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"EMPRESA", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAID",gxz:"ZV25EmpresaId",gxold:"OV25EmpresaId",gxvar:"AV25EmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV25EmpresaId=Value},v2z:function(Value){gx.O.ZV25EmpresaId=Value},v2c:function(){gx.fn.setComboBoxValue("vEMPRESAID",gx.O.AV25EmpresaId)},c2v:function(){gx.O.AV25EmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={fld:"TABLE14",grid:0};
   GXValidFnc[33]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV29Diretorio",gxold:"OV29Diretorio",gxvar:"AV29Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29Diretorio=Value},v2z:function(Value){gx.O.ZV29Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV29Diretorio,0)},c2v:function(){gx.O.AV29Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"CHAMADIALOG",grid:0};
   GXValidFnc[40]={fld:"TABLE12",grid:0};
   GXValidFnc[43]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPARAMETRO",gxz:"ZV16Parametro",gxold:"OV16Parametro",gxvar:"AV16Parametro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV16Parametro=Value},v2z:function(Value){gx.O.ZV16Parametro=Value},v2c:function(){gx.fn.setCheckBoxValue("vPARAMETRO",gx.O.AV16Parametro,"S")},c2v:function(){gx.O.AV16Parametro=this.val()},val:function(){return gx.fn.getControlValue("vPARAMETRO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[55]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAIMPLANTACAO",gxz:"ZV23DataImplantacao",gxold:"OV23DataImplantacao",gxvar:"AV23DataImplantacao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23DataImplantacao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV23DataImplantacao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAIMPLANTACAO",gx.O.AV23DataImplantacao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23DataImplantacao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAIMPLANTACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 57 , function() {
   });
   GXValidFnc[60]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAREFERENCIA",gxz:"ZV24DataReferencia",gxold:"OV24DataReferencia",gxvar:"AV24DataReferencia",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24DataReferencia=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV24DataReferencia=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAREFERENCIA",gx.O.AV24DataReferencia,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24DataReferencia=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAREFERENCIA")},nac:gx.falseFn};
   this.declareDomainHdlr( 62 , function() {
   });
   GXValidFnc[66]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPLANODECONTAS",gxz:"ZV17PlanoDeContas",gxold:"OV17PlanoDeContas",gxvar:"AV17PlanoDeContas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV17PlanoDeContas=Value},v2z:function(Value){gx.O.ZV17PlanoDeContas=Value},v2c:function(){gx.fn.setCheckBoxValue("vPLANODECONTAS",gx.O.AV17PlanoDeContas,"S")},c2v:function(){gx.O.AV17PlanoDeContas=this.val()},val:function(){return gx.fn.getControlValue("vPLANODECONTAS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[75]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESTRUTURA",gxz:"ZV18Estrutura",gxold:"OV18Estrutura",gxvar:"AV18Estrutura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV18Estrutura=Value},v2z:function(Value){gx.O.ZV18Estrutura=Value},v2c:function(){gx.fn.setCheckBoxValue("vESTRUTURA",gx.O.AV18Estrutura,"S")},c2v:function(){gx.O.AV18Estrutura=this.val()},val:function(){return gx.fn.getControlValue("vESTRUTURA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[84]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICO",gxz:"ZV19Historico",gxold:"OV19Historico",gxvar:"AV19Historico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV19Historico=Value},v2z:function(Value){gx.O.ZV19Historico=Value},v2c:function(){gx.fn.setCheckBoxValue("vHISTORICO",gx.O.AV19Historico,"S")},c2v:function(){gx.O.AV19Historico=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[93]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTRODECUSTO",gxz:"ZV20CentroDeCusto",gxold:"OV20CentroDeCusto",gxvar:"AV20CentroDeCusto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV20CentroDeCusto=Value},v2z:function(Value){gx.O.ZV20CentroDeCusto=Value},v2c:function(){gx.fn.setCheckBoxValue("vCENTRODECUSTO",gx.O.AV20CentroDeCusto,"S")},c2v:function(){gx.O.AV20CentroDeCusto=this.val()},val:function(){return gx.fn.getControlValue("vCENTRODECUSTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[102]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRATEIO",gxz:"ZV21Rateio",gxold:"OV21Rateio",gxvar:"AV21Rateio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV21Rateio=Value},v2z:function(Value){gx.O.ZV21Rateio=Value},v2c:function(){gx.fn.setCheckBoxValue("vRATEIO",gx.O.AV21Rateio,"S")},c2v:function(){gx.O.AV21Rateio=this.val()},val:function(){return gx.fn.getControlValue("vRATEIO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[111]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPONATUREZA",gxz:"ZV22TipoNatureza",gxold:"OV22TipoNatureza",gxvar:"AV22TipoNatureza",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV22TipoNatureza=Value},v2z:function(Value){gx.O.ZV22TipoNatureza=Value},v2c:function(){gx.fn.setCheckBoxValue("vTIPONATUREZA",gx.O.AV22TipoNatureza,"S")},c2v:function(){gx.O.AV22TipoNatureza=this.val()},val:function(){return gx.fn.getControlValue("vTIPONATUREZA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[122]={fld:"TABLE6",grid:0};
   GXValidFnc[128]={fld:"JSDATA", format:2,grid:0};
   GXValidFnc[130]={fld:"BTNHELP",grid:0};
   this.AV15TipoImplantacao = "" ;
   this.ZV15TipoImplantacao = "" ;
   this.OV15TipoImplantacao = "" ;
   this.AV25EmpresaId = "" ;
   this.ZV25EmpresaId = "" ;
   this.OV25EmpresaId = "" ;
   this.AV29Diretorio = "" ;
   this.ZV29Diretorio = "" ;
   this.OV29Diretorio = "" ;
   this.AV16Parametro = "" ;
   this.ZV16Parametro = "" ;
   this.OV16Parametro = "" ;
   this.AV23DataImplantacao = gx.date.nullDate() ;
   this.ZV23DataImplantacao = gx.date.nullDate() ;
   this.OV23DataImplantacao = gx.date.nullDate() ;
   this.AV24DataReferencia = gx.date.nullDate() ;
   this.ZV24DataReferencia = gx.date.nullDate() ;
   this.OV24DataReferencia = gx.date.nullDate() ;
   this.AV17PlanoDeContas = "" ;
   this.ZV17PlanoDeContas = "" ;
   this.OV17PlanoDeContas = "" ;
   this.AV18Estrutura = "" ;
   this.ZV18Estrutura = "" ;
   this.OV18Estrutura = "" ;
   this.AV19Historico = "" ;
   this.ZV19Historico = "" ;
   this.OV19Historico = "" ;
   this.AV20CentroDeCusto = "" ;
   this.ZV20CentroDeCusto = "" ;
   this.OV20CentroDeCusto = "" ;
   this.AV21Rateio = "" ;
   this.ZV21Rateio = "" ;
   this.OV21Rateio = "" ;
   this.AV22TipoNatureza = "" ;
   this.ZV22TipoNatureza = "" ;
   this.OV22TipoNatureza = "" ;
   this.AV15TipoImplantacao = "" ;
   this.AV25EmpresaId = "" ;
   this.AV29Diretorio = "" ;
   this.AV16Parametro = "" ;
   this.AV23DataImplantacao = gx.date.nullDate() ;
   this.AV24DataReferencia = gx.date.nullDate() ;
   this.AV17PlanoDeContas = "" ;
   this.AV18Estrutura = "" ;
   this.AV19Historico = "" ;
   this.AV20CentroDeCusto = "" ;
   this.AV21Rateio = "" ;
   this.AV22TipoNatureza = "" ;
   this.Events = {"e132d2_client": ["'DIALOG'", true] ,"e112d2_client": ["'FECHAR'", true] ,"e142d2_client": ["ENTER", true] ,"e172d2_client": ["VTIPOIMPLANTACAO.CLICK", true] ,"e182d2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV15TipoImplantacao',fld:'vTIPOIMPLANTACAO'}],[{av:'AV25EmpresaId',fld:'vEMPRESAID'},{av:'gx.fn.getCtrlProperty("EMPRESA","Visible")',ctrl:'EMPRESA',prop:'Visible'},{ctrl:'vEMPRESAID'},{av:'gx.fn.getCtrlProperty("EMPRESA","Caption")',ctrl:'EMPRESA',prop:'Caption'},{av:'AV29Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["'DIALOG'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV29Diretorio',fld:'vDIRETORIO'},{av:'AV20CentroDeCusto',fld:'vCENTRODECUSTO'},{av:'AV18Estrutura',fld:'vESTRUTURA'},{av:'AV19Historico',fld:'vHISTORICO'},{av:'AV16Parametro',fld:'vPARAMETRO'},{av:'AV17PlanoDeContas',fld:'vPLANODECONTAS'},{av:'AV21Rateio',fld:'vRATEIO'},{av:'AV22TipoNatureza',fld:'vTIPONATUREZA'},{av:'AV15TipoImplantacao',fld:'vTIPOIMPLANTACAO'},{av:'AV23DataImplantacao',fld:'vDATAIMPLANTACAO'},{av:'AV24DataReferencia',fld:'vDATAREFERENCIA'},{av:'AV25EmpresaId',fld:'vEMPRESAID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV26Limpa',fld:'vLIMPA'}],[{av:'AV26Limpa',fld:'vLIMPA'},{av:'AV16Parametro',fld:'vPARAMETRO'},{av:'AV17PlanoDeContas',fld:'vPLANODECONTAS'},{av:'AV18Estrutura',fld:'vESTRUTURA'},{av:'AV19Historico',fld:'vHISTORICO'},{av:'AV20CentroDeCusto',fld:'vCENTRODECUSTO'},{av:'AV21Rateio',fld:'vRATEIO'},{av:'AV22TipoNatureza',fld:'vTIPONATUREZA'},{av:'AV23DataImplantacao',fld:'vDATAIMPLANTACAO'},{av:'AV24DataReferencia',fld:'vDATAREFERENCIA'}]];
   this.EvtParms["VTIPOIMPLANTACAO.CLICK"] = [[{av:'AV15TipoImplantacao',fld:'vTIPOIMPLANTACAO'}],[{av:'AV25EmpresaId',fld:'vEMPRESAID'},{av:'gx.fn.getCtrlProperty("EMPRESA","Visible")',ctrl:'EMPRESA',prop:'Visible'},{ctrl:'vEMPRESAID'},{av:'gx.fn.getCtrlProperty("EMPRESA","Caption")',ctrl:'EMPRESA',prop:'Caption'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new himplantarcontabilidade());
