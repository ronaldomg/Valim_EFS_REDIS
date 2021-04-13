/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:50:46.6
*/
gx.evt.autoSkip = false;
gx.define('hconsultapessoascodificacao', false, function () {
   this.ServerClass =  "hconsultapessoascodificacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV5PessoaId=gx.fn.getIntegerValue("vPESSOAID",'.') ;
   };
   this.e111yn2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e141yn2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e151yn2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,7];
   this.GXLastCtrlId =7;
   this.Grid2Container = new gx.grid.grid(this, 2,"WbpLvl2",5,"Grid2","Grid2","Grid2Container",this.CmpContext,this.IsMasterPage,"hconsultapessoascodificacao",[],false,1,true,true,0,false,false,false,"CollCodificacoesPessoas.CodificacoesPessoasItem",0,"px","Novo registro",false,false,false,null,null,false,"AV6CodificacaoPessoas",false,[1,1,1,1]);
   var Grid2Container = this.Grid2Container;
   Grid2Container.addSingleLineEdit("GXV106",6,"CTLCODIFICACOESID","Código Codificacao","","CodificacoesPessoasCodificacaoId","char",0,"px",15,15,"left",null,[],"GXV106","GXV106",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit("GXV107",7,"CTLCODIFICACOESDESCRICAO","Descrição Codificacao","","CodificacoesPessoasCodificacaoDescricao","svchar",0,"px",35,35,"left",null,[],"GXV107","GXV107",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid2Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:5,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCODIFICACOESID",gxz:"ZV11GXV106",gxold:"OV11GXV106",gxvar:"GXV106",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV106=Value},v2z:function(Value){gx.O.ZV11GXV106=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCODIFICACOESID",row || gx.fn.currentGridRowImpl(5),gx.O.GXV106,0)},c2v:function(){gx.O.GXV106=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCODIFICACOESID",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[7]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCODIFICACOESDESCRICAO",gxz:"ZV12GXV107",gxold:"OV12GXV107",gxvar:"GXV107",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV107=Value},v2z:function(Value){gx.O.ZV12GXV107=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCODIFICACOESDESCRICAO",row || gx.fn.currentGridRowImpl(5),gx.O.GXV107,0)},c2v:function(){gx.O.GXV107=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCODIFICACOESDESCRICAO",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   this.ZV11GXV106 = "" ;
   this.OV11GXV106 = "" ;
   this.ZV12GXV107 = "" ;
   this.OV12GXV107 = "" ;
   this.AV5PessoaId = 0 ;
   this.GXV106 = "" ;
   this.GXV107 = "" ;
   this.Events = {"e111yn2_client": ["'FECHAR'", true] ,"e141yn2_client": ["ENTER", true] ,"e151yn2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'AV6CodificacaoPessoas',fld:'vCODIFICACAOPESSOAS',grid:5}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setVCMap("AV5PessoaId", "vPESSOAID", 0, "int");
   this.addGridBCProperty("Codificacaopessoas", ["CodificacoesPessoasCodificacaoId"], this.GXValidFnc[6], "AV6CodificacaoPessoas");
   this.addGridBCProperty("Codificacaopessoas", ["CodificacoesPessoasCodificacaoDescricao"], this.GXValidFnc[7], "AV6CodificacaoPessoas");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultapessoascodificacao());
