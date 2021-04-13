/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:26:25.88
*/
gx.evt.autoSkip = false;
gx.define('hcadprogramasmenus', false, function () {
   this.ServerClass =  "hcadprogramasmenus" ;
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
      this.AV11Tipo=gx.fn.getControlValue("vTIPO") ;
      this.AV16GrupoId=gx.fn.getIntegerValue("vGRUPOID",'.') ;
      this.AV21UsuarioId=gx.fn.getControlValue("vUSUARIOID") ;
   };
   this.e12dy2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13dy2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15dy2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,12,13,17,21,25,29,37,39];
   this.GXLastCtrlId =39;
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE1",grid:0};
   GXValidFnc[9]={fld:"TXTSISTEMA", format:0,grid:0};
   GXValidFnc[11]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSISTEMAID",gxz:"ZV12SistemaId",gxold:"OV12SistemaId",gxvar:"AV12SistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12SistemaId=Value},v2z:function(Value){gx.O.ZV12SistemaId=Value},v2c:function(){gx.fn.setControlValue("vSISTEMAID",gx.O.AV12SistemaId,0)},c2v:function(){gx.O.AV12SistemaId=this.val()},val:function(){return gx.fn.getControlValue("vSISTEMAID")},nac:gx.falseFn};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSISTEMANOME",gxz:"ZV13SistemaNome",gxold:"OV13SistemaNome",gxvar:"AV13SistemaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13SistemaNome=Value},v2z:function(Value){gx.O.ZV13SistemaNome=Value},v2c:function(){gx.fn.setControlValue("vSISTEMANOME",gx.O.AV13SistemaNome,0)},c2v:function(){gx.O.AV13SistemaNome=this.val()},val:function(){return gx.fn.getControlValue("vSISTEMANOME")},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROGRAMAGRUPOSNALTERACAO",gxz:"ZV17ProgramaGrupoSnAlteracao",gxold:"OV17ProgramaGrupoSnAlteracao",gxvar:"AV17ProgramaGrupoSnAlteracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV17ProgramaGrupoSnAlteracao=Value},v2z:function(Value){gx.O.ZV17ProgramaGrupoSnAlteracao=Value},v2c:function(){gx.fn.setCheckBoxValue("vPROGRAMAGRUPOSNALTERACAO",gx.O.AV17ProgramaGrupoSnAlteracao,"S")},c2v:function(){gx.O.AV17ProgramaGrupoSnAlteracao=this.val()},val:function(){return gx.fn.getControlValue("vPROGRAMAGRUPOSNALTERACAO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[21]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROGRAMAGRUPOSNCONSULTA",gxz:"ZV18ProgramaGrupoSnConsulta",gxold:"OV18ProgramaGrupoSnConsulta",gxvar:"AV18ProgramaGrupoSnConsulta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV18ProgramaGrupoSnConsulta=Value},v2z:function(Value){gx.O.ZV18ProgramaGrupoSnConsulta=Value},v2c:function(){gx.fn.setCheckBoxValue("vPROGRAMAGRUPOSNCONSULTA",gx.O.AV18ProgramaGrupoSnConsulta,"S")},c2v:function(){gx.O.AV18ProgramaGrupoSnConsulta=this.val()},val:function(){return gx.fn.getControlValue("vPROGRAMAGRUPOSNCONSULTA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROGRAMAGRUPOSNEXCLUSAO",gxz:"ZV19ProgramaGrupoSnExclusao",gxold:"OV19ProgramaGrupoSnExclusao",gxvar:"AV19ProgramaGrupoSnExclusao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV19ProgramaGrupoSnExclusao=Value},v2z:function(Value){gx.O.ZV19ProgramaGrupoSnExclusao=Value},v2c:function(){gx.fn.setCheckBoxValue("vPROGRAMAGRUPOSNEXCLUSAO",gx.O.AV19ProgramaGrupoSnExclusao,"S")},c2v:function(){gx.O.AV19ProgramaGrupoSnExclusao=this.val()},val:function(){return gx.fn.getControlValue("vPROGRAMAGRUPOSNEXCLUSAO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROGRAMAGRUPOSNINCLUSAO",gxz:"ZV20ProgramaGrupoSnInclusao",gxold:"OV20ProgramaGrupoSnInclusao",gxvar:"AV20ProgramaGrupoSnInclusao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV20ProgramaGrupoSnInclusao=Value},v2z:function(Value){gx.O.ZV20ProgramaGrupoSnInclusao=Value},v2c:function(){gx.fn.setCheckBoxValue("vPROGRAMAGRUPOSNINCLUSAO",gx.O.AV20ProgramaGrupoSnInclusao,"S")},c2v:function(){gx.O.AV20ProgramaGrupoSnInclusao=this.val()},val:function(){return gx.fn.getControlValue("vPROGRAMAGRUPOSNINCLUSAO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[37]={fld:"JS", format:2,grid:0};
   GXValidFnc[39]={fld:"PROMPT_SISTEMAID",grid:0};
   this.AV12SistemaId = "" ;
   this.ZV12SistemaId = "" ;
   this.OV12SistemaId = "" ;
   this.AV13SistemaNome = "" ;
   this.ZV13SistemaNome = "" ;
   this.OV13SistemaNome = "" ;
   this.AV17ProgramaGrupoSnAlteracao = "" ;
   this.ZV17ProgramaGrupoSnAlteracao = "" ;
   this.OV17ProgramaGrupoSnAlteracao = "" ;
   this.AV18ProgramaGrupoSnConsulta = "" ;
   this.ZV18ProgramaGrupoSnConsulta = "" ;
   this.OV18ProgramaGrupoSnConsulta = "" ;
   this.AV19ProgramaGrupoSnExclusao = "" ;
   this.ZV19ProgramaGrupoSnExclusao = "" ;
   this.OV19ProgramaGrupoSnExclusao = "" ;
   this.AV20ProgramaGrupoSnInclusao = "" ;
   this.ZV20ProgramaGrupoSnInclusao = "" ;
   this.OV20ProgramaGrupoSnInclusao = "" ;
   this.AV12SistemaId = "" ;
   this.AV13SistemaNome = "" ;
   this.AV17ProgramaGrupoSnAlteracao = "" ;
   this.AV18ProgramaGrupoSnConsulta = "" ;
   this.AV19ProgramaGrupoSnExclusao = "" ;
   this.AV20ProgramaGrupoSnInclusao = "" ;
   this.AV11Tipo = "" ;
   this.AV16GrupoId = 0 ;
   this.AV21UsuarioId = "" ;
   this.Events = {"e12dy2_client": ["ENTER", true] ,"e13dy2_client": ["'CANCELAR'", true] ,"e15dy2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV12SistemaId',fld:'vSISTEMAID'},{av:'AV11Tipo',fld:'vTIPO',hsh:true},{av:'AV16GrupoId',fld:'vGRUPOID',hsh:true},{av:'AV21UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'AV17ProgramaGrupoSnAlteracao',fld:'vPROGRAMAGRUPOSNALTERACAO'},{av:'AV18ProgramaGrupoSnConsulta',fld:'vPROGRAMAGRUPOSNCONSULTA'},{av:'AV19ProgramaGrupoSnExclusao',fld:'vPROGRAMAGRUPOSNEXCLUSAO'},{av:'AV20ProgramaGrupoSnInclusao',fld:'vPROGRAMAGRUPOSNINCLUSAO'}],[{av:'AV12SistemaId',fld:'vSISTEMAID'}]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.setPrompt("PROMPT_SISTEMAID", [12]);
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV11Tipo", "vTIPO", 0, "char");
   this.setVCMap("AV16GrupoId", "vGRUPOID", 0, "int");
   this.setVCMap("AV21UsuarioId", "vUSUARIOID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcadprogramasmenus());
