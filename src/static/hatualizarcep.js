/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:49:14.11
*/
gx.evt.autoSkip = false;
gx.define('hatualizarcep', false, function () {
   this.ServerClass =  "hatualizarcep" ;
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
   this.e13l82_client=function()
   {
      this.executeServerEvent("'DIALOG'", false, null, false, false);
   };
   this.e11l82_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14l82_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e17l82_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,17,23,30];
   this.GXLastCtrlId =30;
   GXValidFnc[3]={fld:"TABLE5",grid:0};
   GXValidFnc[6]={fld:"TABLE4",grid:0};
   GXValidFnc[9]={fld:"TABLE9",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV20Diretorio",gxold:"OV20Diretorio",gxvar:"AV20Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20Diretorio=Value},v2z:function(Value){gx.O.ZV20Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV20Diretorio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV20Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 17 , function() {
   });
   GXValidFnc[23]={fld:"TABLE8",grid:0};
   GXValidFnc[30]={fld:"BTNHELP",grid:0};
   this.AV20Diretorio = "" ;
   this.ZV20Diretorio = "" ;
   this.OV20Diretorio = "" ;
   this.AV20Diretorio = "" ;
   this.Events = {"e13l82_client": ["'DIALOG'", true] ,"e11l82_client": ["'FECHAR'", true] ,"e14l82_client": ["ENTER", true] ,"e17l82_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV20Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["'DIALOG'"] = [[],[{av:'AV47isCloud',fld:'vISCLOUD'},{av:'AV46DirUpload',fld:'vDIRUPLOAD'},{av:'AV20Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20Diretorio',fld:'vDIRETORIO'},{av:'AV28RetAtt',fld:'vRETATT'},{av:'AV22LinhaValida',fld:'vLINHAVALIDA'},{av:'AV42ValorLinha',fld:'vVALORLINHA'},{av:'AV25Retorno',fld:'vRETORNO'},{av:'AV24CodigoTitular',fld:'vCODIGOTITULAR'},{av:'AV29ProximaLinha',fld:'vPROXIMALINHA'}],[{av:'AV43SnErro',fld:'vSNERRO'},{av:'AV21ArquivoCep',fld:'vARQUIVOCEP'},{av:'AV19i',fld:'vI'},{av:'AV44Cont',fld:'vCONT'},{av:'AV22LinhaValida',fld:'vLINHAVALIDA'},{av:'AV23Categoria',fld:'vCATEGORIA'},{av:'AV24CodigoTitular',fld:'vCODIGOTITULAR'},{av:'AV45CategoriaAux',fld:'vCATEGORIAAUX'},{av:'AV25Retorno',fld:'vRETORNO'},{av:'AV26TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV27TitularCep',fld:'vTITULARCEP'},{av:'AV28RetAtt',fld:'vRETATT'},{av:'AV29ProximaLinha',fld:'vPROXIMALINHA'},{av:'AV36TitularEndereco',fld:'vTITULARENDERECO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hatualizarcep());
