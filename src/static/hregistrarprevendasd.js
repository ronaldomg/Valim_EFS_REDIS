/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:59:39.39
*/
gx.evt.autoSkip = false;
gx.define('hregistrarprevendasd', false, function () {
   this.ServerClass =  "hregistrarprevendasd" ;
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
      this.AV21EmpresaVenda=gx.fn.getControlValue("vEMPRESAVENDA") ;
      this.AV14CPFCliente=gx.fn.getControlValue("vCPFCLIENTE") ;
      this.AV13VendedorId=gx.fn.getIntegerValue("vVENDEDORID",'.') ;
   };
   this.e1214n2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1314n2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1514n2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,23,24,25];
   this.GXLastCtrlId =25;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCPFENTRADA",gxz:"ZV37CpfEntrada",gxold:"OV37CpfEntrada",gxvar:"AV37CpfEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37CpfEntrada=Value},v2z:function(Value){gx.O.ZV37CpfEntrada=Value},v2c:function(){gx.fn.setControlValue("vCPFENTRADA",gx.O.AV37CpfEntrada,0)},c2v:function(){gx.O.AV37CpfEntrada=this.val()},val:function(){return gx.fn.getControlValue("vCPFENTRADA")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORENTRADA",gxz:"ZV38VendedorEntrada",gxold:"OV38VendedorEntrada",gxvar:"AV38VendedorEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38VendedorEntrada=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38VendedorEntrada=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORENTRADA",gx.O.AV38VendedorEntrada,0)},c2v:function(){gx.O.AV38VendedorEntrada=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORENTRADA",'.')},nac:gx.falseFn};
   GXValidFnc[23]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDOREMPRESAID",gxz:"ZV32VendedorEmpresaId",gxold:"OV32VendedorEmpresaId",gxvar:"AV32VendedorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32VendedorEmpresaId=Value},v2z:function(Value){gx.O.ZV32VendedorEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vVENDEDOREMPRESAID",gx.O.AV32VendedorEmpresaId,0)},c2v:function(){gx.O.AV32VendedorEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDOREMPRESAID")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"JS", format:2,grid:0};
   GXValidFnc[25]={fld:"PROMPT_VENDEDORENTRADA",grid:0};
   this.AV37CpfEntrada = "" ;
   this.ZV37CpfEntrada = "" ;
   this.OV37CpfEntrada = "" ;
   this.AV38VendedorEntrada = 0 ;
   this.ZV38VendedorEntrada = 0 ;
   this.OV38VendedorEntrada = 0 ;
   this.AV32VendedorEmpresaId = "" ;
   this.ZV32VendedorEmpresaId = "" ;
   this.OV32VendedorEmpresaId = "" ;
   this.AV37CpfEntrada = "" ;
   this.AV38VendedorEntrada = 0 ;
   this.AV32VendedorEmpresaId = "" ;
   this.AV21EmpresaVenda = "" ;
   this.AV14CPFCliente = "" ;
   this.AV13VendedorId = 0 ;
   this.Events = {"e1214n2_client": ["ENTER", true] ,"e1314n2_client": ["'FECHAR'", true] ,"e1514n2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV15SnErro',fld:'vSNERRO'},{av:'AV20Carrinho',fld:'vCARRINHO'},{av:'AV18Erro',fld:'vERRO'},{av:'AV21EmpresaVenda',fld:'vEMPRESAVENDA',hsh:true},{av:'AV37CpfEntrada',fld:'vCPFENTRADA'},{av:'AV38VendedorEntrada',fld:'vVENDEDORENTRADA'},{av:'gx.fn.getCtrlProperty("vCPFENTRADA","Enabled")',ctrl:'vCPFENTRADA',prop:'Enabled'}],[{av:'AV15SnErro',fld:'vSNERRO'},{av:'AV40CPFErro',fld:'vCPFERRO'},{av:'gx.fn.getCtrlProperty("vCPFENTRADA","Enabled")',ctrl:'vCPFENTRADA',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_VENDEDORENTRADA", [15]);
   this.EnterCtrl = ["AVANCAR"];
   this.setVCMap("AV21EmpresaVenda", "vEMPRESAVENDA", 0, "char");
   this.setVCMap("AV14CPFCliente", "vCPFCLIENTE", 0, "char");
   this.setVCMap("AV13VendedorId", "vVENDEDORID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarprevendasd());
