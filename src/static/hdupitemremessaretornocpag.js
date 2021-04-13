/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:1:0.8
*/
gx.evt.autoSkip = false;
gx.define('hdupitemremessaretornocpag', false, function () {
   this.ServerClass =  "hdupitemremessaretornocpag" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV14EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV20RemessaRetornoCPagId=gx.fn.getIntegerValue("vREMESSARETORNOCPAGID",'.') ;
      this.AV21RemessaRetornoCPagItemSeq=gx.fn.getIntegerValue("vREMESSARETORNOCPAGITEMSEQ",'.') ;
      this.AV22RemessaRetornoCPagTipo=gx.fn.getControlValue("vREMESSARETORNOCPAGTIPO") ;
   };
   this.s112_client=function()
   {
      if ( this.AV23RemessaRetornoCPagItemTipo == "3" || this.AV23RemessaRetornoCPagItemTipo == "4" )
      {
         gx.fn.setCtrlProperty("TABTPPAGMTO","Visible", 1 );
         gx.fn.setCtrlProperty("TABQUEBRA","Visible", 0 );
      }
      else if ( this.AV23RemessaRetornoCPagItemTipo == "2" )
      {
         gx.fn.setCtrlProperty("TABTPPAGMTO","Visible", 1 );
         gx.fn.setCtrlProperty("TABQUEBRA","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABTPPAGMTO","Visible", 0 );
         gx.fn.setCtrlProperty("TABQUEBRA","Visible", 0 );
      }
   };
   this.e12w82_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14w82_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16w82_client=function()
   {
      this.executeServerEvent("VREMESSARETORNOCPAGITEMTIPO.CLICK", true, null, false, true);
   };
   this.e17w82_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,19,22,24,25,28,30,33,35];
   this.GXLastCtrlId =35;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREMESSARETORNOCPAGITEMTIPO",gxz:"ZV23RemessaRetornoCPagItemTipo",gxold:"OV23RemessaRetornoCPagItemTipo",gxvar:"AV23RemessaRetornoCPagItemTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23RemessaRetornoCPagItemTipo=Value},v2z:function(Value){gx.O.ZV23RemessaRetornoCPagItemTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vREMESSARETORNOCPAGITEMTIPO",gx.O.AV23RemessaRetornoCPagItemTipo)},c2v:function(){gx.O.AV23RemessaRetornoCPagItemTipo=this.val()},val:function(){return gx.fn.getControlValue("vREMESSARETORNOCPAGITEMTIPO")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREMESSARETORNOCPAGITEMDESCRICAO",gxz:"ZV24RemessaRetornoCPagItemDescricao",gxold:"OV24RemessaRetornoCPagItemDescricao",gxvar:"AV24RemessaRetornoCPagItemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24RemessaRetornoCPagItemDescricao=Value},v2z:function(Value){gx.O.ZV24RemessaRetornoCPagItemDescricao=Value},v2c:function(){gx.fn.setControlValue("vREMESSARETORNOCPAGITEMDESCRICAO",gx.O.AV24RemessaRetornoCPagItemDescricao,0)},c2v:function(){gx.O.AV24RemessaRetornoCPagItemDescricao=this.val()},val:function(){return gx.fn.getControlValue("vREMESSARETORNOCPAGITEMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TABTPPAGMTO",grid:0};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREMESSARETORNOCPAGITEMTIPOPAGMTO",gxz:"ZV28RemessaRetornoCPagItemTipoPagmto",gxold:"OV28RemessaRetornoCPagItemTipoPagmto",gxvar:"AV28RemessaRetornoCPagItemTipoPagmto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28RemessaRetornoCPagItemTipoPagmto=Value},v2z:function(Value){gx.O.ZV28RemessaRetornoCPagItemTipoPagmto=Value},v2c:function(){gx.fn.setComboBoxValue("vREMESSARETORNOCPAGITEMTIPOPAGMTO",gx.O.AV28RemessaRetornoCPagItemTipoPagmto)},c2v:function(){gx.O.AV28RemessaRetornoCPagItemTipoPagmto=this.val()},val:function(){return gx.fn.getControlValue("vREMESSARETORNOCPAGITEMTIPOPAGMTO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TABQUEBRA",grid:0};
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREMESSARETORNOCPAGITEMQUEBRA1",gxz:"ZV27RemessaRetornoCPagItemQuebra1",gxold:"OV27RemessaRetornoCPagItemQuebra1",gxvar:"AV27RemessaRetornoCPagItemQuebra1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27RemessaRetornoCPagItemQuebra1=Value},v2z:function(Value){gx.O.ZV27RemessaRetornoCPagItemQuebra1=Value},v2c:function(){gx.fn.setComboBoxValue("vREMESSARETORNOCPAGITEMQUEBRA1",gx.O.AV27RemessaRetornoCPagItemQuebra1)},c2v:function(){gx.O.AV27RemessaRetornoCPagItemQuebra1=this.val()},val:function(){return gx.fn.getControlValue("vREMESSARETORNOCPAGITEMQUEBRA1")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREMESSARETORNOCPAGITEMQUEBRA2",gxz:"ZV26RemessaRetornoCPagItemQuebra2",gxold:"OV26RemessaRetornoCPagItemQuebra2",gxvar:"AV26RemessaRetornoCPagItemQuebra2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV26RemessaRetornoCPagItemQuebra2=Value},v2z:function(Value){gx.O.ZV26RemessaRetornoCPagItemQuebra2=Value},v2c:function(){gx.fn.setComboBoxValue("vREMESSARETORNOCPAGITEMQUEBRA2",gx.O.AV26RemessaRetornoCPagItemQuebra2)},c2v:function(){gx.O.AV26RemessaRetornoCPagItemQuebra2=this.val()},val:function(){return gx.fn.getControlValue("vREMESSARETORNOCPAGITEMQUEBRA2")},nac:gx.falseFn};
   this.AV23RemessaRetornoCPagItemTipo = "" ;
   this.ZV23RemessaRetornoCPagItemTipo = "" ;
   this.OV23RemessaRetornoCPagItemTipo = "" ;
   this.AV24RemessaRetornoCPagItemDescricao = "" ;
   this.ZV24RemessaRetornoCPagItemDescricao = "" ;
   this.OV24RemessaRetornoCPagItemDescricao = "" ;
   this.AV28RemessaRetornoCPagItemTipoPagmto = "" ;
   this.ZV28RemessaRetornoCPagItemTipoPagmto = "" ;
   this.OV28RemessaRetornoCPagItemTipoPagmto = "" ;
   this.AV27RemessaRetornoCPagItemQuebra1 = "" ;
   this.ZV27RemessaRetornoCPagItemQuebra1 = "" ;
   this.OV27RemessaRetornoCPagItemQuebra1 = "" ;
   this.AV26RemessaRetornoCPagItemQuebra2 = "" ;
   this.ZV26RemessaRetornoCPagItemQuebra2 = "" ;
   this.OV26RemessaRetornoCPagItemQuebra2 = "" ;
   this.AV23RemessaRetornoCPagItemTipo = "" ;
   this.AV24RemessaRetornoCPagItemDescricao = "" ;
   this.AV28RemessaRetornoCPagItemTipoPagmto = "" ;
   this.AV27RemessaRetornoCPagItemQuebra1 = "" ;
   this.AV26RemessaRetornoCPagItemQuebra2 = "" ;
   this.AV14EmpresaPadrao = "" ;
   this.AV20RemessaRetornoCPagId = 0 ;
   this.AV21RemessaRetornoCPagItemSeq = 0 ;
   this.AV22RemessaRetornoCPagTipo = "" ;
   this.Events = {"e12w82_client": ["ENTER", true] ,"e14w82_client": ["'FECHAR'", true] ,"e16w82_client": ["VREMESSARETORNOCPAGITEMTIPO.CLICK", true] ,"e17w82_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV23RemessaRetornoCPagItemTipo',fld:'vREMESSARETORNOCPAGITEMTIPO'}],[{av:'gx.fn.getCtrlProperty("TABTPPAGMTO","Visible")',ctrl:'TABTPPAGMTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABQUEBRA","Visible")',ctrl:'TABQUEBRA',prop:'Visible'}]];
   this.EvtParms["ENTER"] = [[{av:'AV23RemessaRetornoCPagItemTipo',fld:'vREMESSARETORNOCPAGITEMTIPO'},{av:'AV14EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20RemessaRetornoCPagId',fld:'vREMESSARETORNOCPAGID'},{av:'AV21RemessaRetornoCPagItemSeq',fld:'vREMESSARETORNOCPAGITEMSEQ'},{av:'AV24RemessaRetornoCPagItemDescricao',fld:'vREMESSARETORNOCPAGITEMDESCRICAO'},{av:'AV28RemessaRetornoCPagItemTipoPagmto',fld:'vREMESSARETORNOCPAGITEMTIPOPAGMTO'},{av:'AV27RemessaRetornoCPagItemQuebra1',fld:'vREMESSARETORNOCPAGITEMQUEBRA1'},{av:'AV26RemessaRetornoCPagItemQuebra2',fld:'vREMESSARETORNOCPAGITEMQUEBRA2'},{av:'AV22RemessaRetornoCPagTipo',fld:'vREMESSARETORNOCPAGTIPO'}],[{av:'AV25SNErro',fld:'vSNERRO'},{av:'AV18MsgmErro',fld:'vMSGMERRO'}]];
   this.EvtParms["VREMESSARETORNOCPAGITEMTIPO.CLICK"] = [[{av:'AV23RemessaRetornoCPagItemTipo',fld:'vREMESSARETORNOCPAGITEMTIPO'}],[{av:'gx.fn.getCtrlProperty("TABTPPAGMTO","Visible")',ctrl:'TABTPPAGMTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABQUEBRA","Visible")',ctrl:'TABQUEBRA',prop:'Visible'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV22RemessaRetornoCPagTipo',fld:'vREMESSARETORNOCPAGTIPO'},{av:'AV21RemessaRetornoCPagItemSeq',fld:'vREMESSARETORNOCPAGITEMSEQ'},{av:'AV20RemessaRetornoCPagId',fld:'vREMESSARETORNOCPAGID'},{av:'AV14EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV14EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV20RemessaRetornoCPagId", "vREMESSARETORNOCPAGID", 0, "int");
   this.setVCMap("AV21RemessaRetornoCPagItemSeq", "vREMESSARETORNOCPAGITEMSEQ", 0, "int");
   this.setVCMap("AV22RemessaRetornoCPagTipo", "vREMESSARETORNOCPAGTIPO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdupitemremessaretornocpag());
