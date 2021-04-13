/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:51:29.51
*/
gx.evt.autoSkip = false;
gx.define('hinstalarsistema', false, function () {
   this.ServerClass =  "hinstalarsistema" ;
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
   this.e132g2_client=function()
   {
      this.executeServerEvent("'DIALOG'", true, null, false, false);
   };
   this.e112g2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e142g2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152g2_client=function()
   {
      this.executeServerEvent("'LISTARSISTEMAS'", true, null, false, false);
   };
   this.e182g2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,27,31,35,39,42,45,50,53,55,61,67,69];
   this.GXLastCtrlId =69;
   GXValidFnc[3]={fld:"TABLE11",grid:0};
   GXValidFnc[6]={fld:"TABLE9",grid:0};
   GXValidFnc[9]={fld:"TABLE12",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={fld:"TABLE14",grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV23Diretorio",gxold:"OV23Diretorio",gxvar:"AV23Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23Diretorio=Value},v2z:function(Value){gx.O.ZV23Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV23Diretorio,0)},c2v:function(){gx.O.AV23Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"CHAMADIALOG",grid:0};
   GXValidFnc[27]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPORTARATALHO",gxz:"ZV16ImportarAtalho",gxold:"OV16ImportarAtalho",gxvar:"AV16ImportarAtalho",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV16ImportarAtalho=Value},v2z:function(Value){gx.O.ZV16ImportarAtalho=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPORTARATALHO",gx.O.AV16ImportarAtalho,"S")},c2v:function(){gx.O.AV16ImportarAtalho=this.val()},val:function(){return gx.fn.getControlValue("vIMPORTARATALHO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPORTARETIQUETA",gxz:"ZV22ImportarEtiqueta",gxold:"OV22ImportarEtiqueta",gxvar:"AV22ImportarEtiqueta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV22ImportarEtiqueta=Value},v2z:function(Value){gx.O.ZV22ImportarEtiqueta=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPORTARETIQUETA",gx.O.AV22ImportarEtiqueta,"S")},c2v:function(){gx.O.AV22ImportarEtiqueta=this.val()},val:function(){return gx.fn.getControlValue("vIMPORTARETIQUETA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[39]={fld:"TABLE13",grid:0};
   GXValidFnc[42]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPORTARGRUPO",gxz:"ZV15ImportarGrupo",gxold:"OV15ImportarGrupo",gxvar:"AV15ImportarGrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV15ImportarGrupo=Value},v2z:function(Value){gx.O.ZV15ImportarGrupo=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPORTARGRUPO",gx.O.AV15ImportarGrupo,"S")},c2v:function(){gx.O.AV15ImportarGrupo=this.val()},val:function(){return gx.fn.getControlValue("vIMPORTARGRUPO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[45]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNEXCLUIRGRUPO",gxz:"ZV26SnExcluirGrupo",gxold:"OV26SnExcluirGrupo",gxvar:"AV26SnExcluirGrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV26SnExcluirGrupo=Value},v2z:function(Value){gx.O.ZV26SnExcluirGrupo=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNEXCLUIRGRUPO",gx.O.AV26SnExcluirGrupo,"S")},c2v:function(){gx.O.AV26SnExcluirGrupo=this.val()},val:function(){return gx.fn.getControlValue("vSNEXCLUIRGRUPO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[50]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[53]={fld:"LBLSISTEMAS", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSISTEMAS",gxz:"ZV17Sistemas",gxold:"OV17Sistemas",gxvar:"AV17Sistemas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17Sistemas=Value},v2z:function(Value){gx.O.ZV17Sistemas=Value},v2c:function(){gx.fn.setControlValue("vSISTEMAS",gx.O.AV17Sistemas,0)},c2v:function(){gx.O.AV17Sistemas=this.val()},val:function(){return gx.fn.getControlValue("vSISTEMAS")},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE10",grid:0};
   GXValidFnc[67]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV24AcessoSistemaSequencia",gxold:"OV24AcessoSistemaSequencia",gxvar:"AV24AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV24AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV24AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[69]={fld:"BTNHELP",grid:0};
   this.AV23Diretorio = "" ;
   this.ZV23Diretorio = "" ;
   this.OV23Diretorio = "" ;
   this.AV16ImportarAtalho = "" ;
   this.ZV16ImportarAtalho = "" ;
   this.OV16ImportarAtalho = "" ;
   this.AV22ImportarEtiqueta = "" ;
   this.ZV22ImportarEtiqueta = "" ;
   this.OV22ImportarEtiqueta = "" ;
   this.AV15ImportarGrupo = "" ;
   this.ZV15ImportarGrupo = "" ;
   this.OV15ImportarGrupo = "" ;
   this.AV26SnExcluirGrupo = "" ;
   this.ZV26SnExcluirGrupo = "" ;
   this.OV26SnExcluirGrupo = "" ;
   this.AV17Sistemas = "" ;
   this.ZV17Sistemas = "" ;
   this.OV17Sistemas = "" ;
   this.AV24AcessoSistemaSequencia = 0 ;
   this.ZV24AcessoSistemaSequencia = 0 ;
   this.OV24AcessoSistemaSequencia = 0 ;
   this.AV23Diretorio = "" ;
   this.AV16ImportarAtalho = "" ;
   this.AV22ImportarEtiqueta = "" ;
   this.AV15ImportarGrupo = "" ;
   this.AV26SnExcluirGrupo = "" ;
   this.AV17Sistemas = "" ;
   this.AV24AcessoSistemaSequencia = 0 ;
   this.A732SistemaInstalacaoSistemaId = "" ;
   this.A75UsuarioId = "" ;
   this.A244GrupoId = 0 ;
   this.Events = {"e132g2_client": ["'DIALOG'", true] ,"e112g2_client": ["'FECHAR'", true] ,"e142g2_client": ["ENTER", true] ,"e152g2_client": ["'LISTARSISTEMAS'", true] ,"e182g2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV17Sistemas',fld:'vSISTEMAS'},{av:'AV23Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["'DIALOG'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV24AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20InstalacaoBloqueada',fld:'vINSTALACAOBLOQUEADA'},{av:'AV23Diretorio',fld:'vDIRETORIO'},{av:'AV17Sistemas',fld:'vSISTEMAS'},{av:'AV26SnExcluirGrupo',fld:'vSNEXCLUIRGRUPO'},{av:'A244GrupoId',fld:'GRUPOID'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV15ImportarGrupo',fld:'vIMPORTARGRUPO'},{av:'AV16ImportarAtalho',fld:'vIMPORTARATALHO'},{av:'AV22ImportarEtiqueta',fld:'vIMPORTARETIQUETA'},{av:'AV21ErroImp',fld:'vERROIMP'},{av:'A732SistemaInstalacaoSistemaId',fld:'SISTEMAINSTALACAOSISTEMAID'}],[{av:'AV27SnErro',fld:'vSNERRO'},{av:'AV32GXLvl69',fld:'vGXLVL69'},{av:'AV21ErroImp',fld:'vERROIMP'},{av:'AV20InstalacaoBloqueada',fld:'vINSTALACAOBLOQUEADA'}]];
   this.EvtParms["'LISTARSISTEMAS'"] = [[{av:'AV20InstalacaoBloqueada',fld:'vINSTALACAOBLOQUEADA'},{av:'AV23Diretorio',fld:'vDIRETORIO'},{av:'A732SistemaInstalacaoSistemaId',fld:'SISTEMAINSTALACAOSISTEMAID'}],[{av:'AV23Diretorio',fld:'vDIRETORIO'},{av:'AV20InstalacaoBloqueada',fld:'vINSTALACAOBLOQUEADA'}]];
   this.EnterCtrl = ["IMAGE1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hinstalarsistema());
