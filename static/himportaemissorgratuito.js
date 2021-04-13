/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:1:24.51
*/
gx.evt.autoSkip = false;
gx.define('himportaemissorgratuito', false, function () {
   this.ServerClass =  "himportaemissorgratuito" ;
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
   this.e1128s2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1328s2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1428s2_client=function()
   {
      this.executeServerEvent("'BUSCARDIRETORIOCLI'", true, null, false, false);
   };
   this.e1528s2_client=function()
   {
      this.executeServerEvent("'BUSCARDIRETORIOPRO'", true, null, false, false);
   };
   this.e1728s2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,20,27];
   this.GXLastCtrlId =27;
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TABLEBORDER",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIOPESSOA",gxz:"ZV7DiretorioPessoa",gxold:"OV7DiretorioPessoa",gxvar:"AV7DiretorioPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7DiretorioPessoa=Value},v2z:function(Value){gx.O.ZV7DiretorioPessoa=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIOPESSOA",gx.O.AV7DiretorioPessoa,0)},c2v:function(){gx.O.AV7DiretorioPessoa=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIOPESSOA")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"DIALOGCLI",grid:0};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIOPRODUTO",gxz:"ZV8DiretorioProduto",gxold:"OV8DiretorioProduto",gxvar:"AV8DiretorioProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8DiretorioProduto=Value},v2z:function(Value){gx.O.ZV8DiretorioProduto=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIOPRODUTO",gx.O.AV8DiretorioProduto,0)},c2v:function(){gx.O.AV8DiretorioProduto=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIOPRODUTO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"DIALOGPRODUTOS",grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV6AcessoSistemaSequencia",gxold:"OV6AcessoSistemaSequencia",gxvar:"AV6AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV6AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV6AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   this.AV7DiretorioPessoa = "" ;
   this.ZV7DiretorioPessoa = "" ;
   this.OV7DiretorioPessoa = "" ;
   this.AV8DiretorioProduto = "" ;
   this.ZV8DiretorioProduto = "" ;
   this.OV8DiretorioProduto = "" ;
   this.AV6AcessoSistemaSequencia = 0 ;
   this.ZV6AcessoSistemaSequencia = 0 ;
   this.OV6AcessoSistemaSequencia = 0 ;
   this.AV7DiretorioPessoa = "" ;
   this.AV8DiretorioProduto = "" ;
   this.AV6AcessoSistemaSequencia = 0 ;
   this.Events = {"e1128s2_client": ["'FECHAR'", true] ,"e1328s2_client": ["ENTER", true] ,"e1428s2_client": ["'BUSCARDIRETORIOCLI'", true] ,"e1528s2_client": ["'BUSCARDIRETORIOPRO'", true] ,"e1728s2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV6AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV19SnErro',fld:'vSNERRO'},{av:'AV7DiretorioPessoa',fld:'vDIRETORIOPESSOA'},{av:'AV8DiretorioProduto',fld:'vDIRETORIOPRODUTO'}],[{av:'AV14MsgErro',fld:'vMSGERRO'},{av:'AV19SnErro',fld:'vSNERRO'},{av:'AV17QtArq',fld:'vQTARQ'},{av:'AV27GXV2',fld:'vGXV2'},{av:'AV29GXV4',fld:'vGXV4'}]];
   this.EvtParms["'BUSCARDIRETORIOCLI'"] = [[],[{av:'AV7DiretorioPessoa',fld:'vDIRETORIOPESSOA'}]];
   this.EvtParms["'BUSCARDIRETORIOPRO'"] = [[],[{av:'AV8DiretorioProduto',fld:'vDIRETORIOPRODUTO'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new himportaemissorgratuito());
