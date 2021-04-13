/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:54:42.57
*/
gx.evt.autoSkip = false;
gx.define('hrelatorioacervo', false, function () {
   this.ServerClass =  "hrelatorioacervo" ;
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
   this.s112_client=function()
   {
      if ( this.AV14InAutor == "S" && this.AV15InIndice == "S" )
      {
         this.AV48ImprimiAutorIndice =  "T"  ;
      }
      else
      {
         if ( this.AV14InAutor == "S" && this.AV15InIndice == "N" )
         {
            this.AV48ImprimiAutorIndice =  "A"  ;
         }
         else
         {
            if ( this.AV14InAutor == "N" && this.AV15InIndice == "S" )
            {
               this.AV48ImprimiAutorIndice =  "I"  ;
            }
            else
            {
               this.AV48ImprimiAutorIndice =  ""  ;
            }
         }
      }
   };
   this.e113v2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e133v2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e153v2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e163v2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e173v2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e193v2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,18,21,24,27,29,32,34,38,42];
   this.GXLastCtrlId =42;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABTXT",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV30TxtTela",gxold:"OV30TxtTela",gxvar:"AV30TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV30TxtTela=Value},v2z:function(Value){gx.O.ZV30TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV30TxtTela)},c2v:function(){gx.O.AV30TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"IMAGE2",grid:0};
   GXValidFnc[18]={fld:"IMAGE1",grid:0};
   GXValidFnc[21]={fld:"TABLE7",grid:0};
   GXValidFnc[24]={fld:"TABLE4",grid:0};
   GXValidFnc[27]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPORELATORIO",gxz:"ZV13TipoRelatorio",gxold:"OV13TipoRelatorio",gxvar:"AV13TipoRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV13TipoRelatorio=Value},v2z:function(Value){gx.O.ZV13TipoRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPORELATORIO",gx.O.AV13TipoRelatorio)},c2v:function(){gx.O.AV13TipoRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTIPORELATORIO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV10Ordenacao",gxold:"OV10Ordenacao",gxvar:"AV10Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10Ordenacao=Value},v2z:function(Value){gx.O.ZV10Ordenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDENACAO",gx.O.AV10Ordenacao)},c2v:function(){gx.O.AV10Ordenacao=this.val()},val:function(){return gx.fn.getControlValue("vORDENACAO")},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINAUTOR",gxz:"ZV14InAutor",gxold:"OV14InAutor",gxvar:"AV14InAutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV14InAutor=Value},v2z:function(Value){gx.O.ZV14InAutor=Value},v2c:function(){gx.fn.setCheckBoxValue("vINAUTOR",gx.O.AV14InAutor,"S")},c2v:function(){gx.O.AV14InAutor=this.val()},val:function(){return gx.fn.getControlValue("vINAUTOR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[42]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vININDICE",gxz:"ZV15InIndice",gxold:"OV15InIndice",gxvar:"AV15InIndice",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV15InIndice=Value},v2z:function(Value){gx.O.ZV15InIndice=Value},v2c:function(){gx.fn.setCheckBoxValue("vININDICE",gx.O.AV15InIndice,"S")},c2v:function(){gx.O.AV15InIndice=this.val()},val:function(){return gx.fn.getControlValue("vININDICE")},nac:gx.falseFn,values:['S','N']};
   this.AV30TxtTela = "" ;
   this.ZV30TxtTela = "" ;
   this.OV30TxtTela = "" ;
   this.AV13TipoRelatorio = "" ;
   this.ZV13TipoRelatorio = "" ;
   this.OV13TipoRelatorio = "" ;
   this.AV10Ordenacao = "" ;
   this.ZV10Ordenacao = "" ;
   this.OV10Ordenacao = "" ;
   this.AV14InAutor = "" ;
   this.ZV14InAutor = "" ;
   this.OV14InAutor = "" ;
   this.AV15InIndice = "" ;
   this.ZV15InIndice = "" ;
   this.OV15InIndice = "" ;
   this.AV30TxtTela = "" ;
   this.AV13TipoRelatorio = "" ;
   this.AV10Ordenacao = "" ;
   this.AV14InAutor = "" ;
   this.AV15InIndice = "" ;
   this.AV48ImprimiAutorIndice = "" ;
   this.Events = {"e113v2_client": ["'FECHAR'", true] ,"e133v2_client": ["ENTER", true] ,"e153v2_client": ["'SALVARTXT'", true] ,"e163v2_client": ["VTXTTELA.CLICK", true] ,"e173v2_client": ["'EXCLUIRTXT'", true] ,"e193v2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV53Pgmname',fld:'vPGMNAME'},{av:'AV46SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV30TxtTela',fld:'vTXTTELA'}],[{av:'AV30TxtTela',fld:'vTXTTELA'},{av:'AV56GXV2',fld:'vGXV2'},{av:'AV47SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV55GXV1',fld:'vGXV1'},{av:'AV13TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV10Ordenacao',fld:'vORDENACAO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV30TxtTela',fld:'vTXTTELA'},{av:'AV13TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV48ImprimiAutorIndice',fld:'vIMPRIMIAUTORINDICE'},{av:'AV54Pgmdesc',fld:'vPGMDESC'},{av:'AV14InAutor',fld:'vINAUTOR'},{av:'AV15InIndice',fld:'vININDICE'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV53Pgmname',fld:'vPGMNAME'}],[{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV43SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV50QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV48ImprimiAutorIndice',fld:'vIMPRIMIAUTORINDICE'},{av:'AV49Orientacao',fld:'vORIENTACAO'},{av:'AV45OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV30TxtTela',fld:'vTXTTELA'},{av:'AV53Pgmname',fld:'vPGMNAME'},{av:'AV13TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV10Ordenacao',fld:'vORDENACAO'}],[{av:'AV45OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV53Pgmname',fld:'vPGMNAME'},{av:'AV46SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV30TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV55GXV1',fld:'vGXV1'},{av:'AV47SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV13TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV10Ordenacao',fld:'vORDENACAO'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV53Pgmname',fld:'vPGMNAME'},{av:'AV30TxtTela',fld:'vTXTTELA'}],[]];
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelatorioacervo());
