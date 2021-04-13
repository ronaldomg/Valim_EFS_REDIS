/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:50:45.42
*/
gx.evt.autoSkip = false;
gx.define('hconsultapessoasclassificacao', false, function () {
   this.ServerClass =  "hconsultapessoasclassificacao" ;
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
      this.AV7PessoaId=gx.fn.getIntegerValue("vPESSOAID",'.') ;
   };
   this.e111ym2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e141ym2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e151ym2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,7,8,9];
   this.GXLastCtrlId =9;
   this.Grid3Container = new gx.grid.grid(this, 2,"WbpLvl2",5,"Grid3","Grid3","Grid3Container",this.CmpContext,this.IsMasterPage,"hconsultapessoasclassificacao",[],false,1,true,true,0,false,false,false,"CollClassificacaoPessoas.ClassificacaoPessoasItem",0,"px","Novo registro",false,false,false,null,null,false,"AV5ClassificacaoPessoaItens",false,[1,1,1,1]);
   var Grid3Container = this.Grid3Container;
   Grid3Container.addSingleLineEdit("GXV106",6,"CTLCLASSIFICACAOID","Classificação","","ClassificacaoId","char",0,"px",15,15,"left",null,[],"GXV106","GXV106",false,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV107",7,"CTLCLASSIFICACAODESCRICAO","Descricao da Classificacao","","ClassificacaoDescricao","svchar",0,"px",40,40,"left",null,[],"GXV107","GXV107",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV108",8,"CTLOPCAOCLASSIFICACAOID","Opção da Classificação","","OpcaoClassificacaoId","char",0,"px",20,20,"left",null,[],"GXV108","GXV108",false,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV109",9,"CTLOPCAOCLASSIFICACAODESCRICAO","Descrição Opção da Classificação","","OpcaoClassificacaoDescricao","char",0,"px",20,20,"left",null,[],"GXV109","GXV109",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid3Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:5,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCLASSIFICACAOID",gxz:"ZV11GXV106",gxold:"OV11GXV106",gxvar:"GXV106",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV106=Value},v2z:function(Value){gx.O.ZV11GXV106=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(5),gx.O.GXV106,0)},c2v:function(){gx.O.GXV106=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[7]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCLASSIFICACAODESCRICAO",gxz:"ZV12GXV107",gxold:"OV12GXV107",gxvar:"GXV107",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV107=Value},v2z:function(Value){gx.O.ZV12GXV107=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCLASSIFICACAODESCRICAO",row || gx.fn.currentGridRowImpl(5),gx.O.GXV107,0)},c2v:function(){gx.O.GXV107=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCLASSIFICACAODESCRICAO",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[8]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLOPCAOCLASSIFICACAOID",gxz:"ZV13GXV108",gxold:"OV13GXV108",gxvar:"GXV108",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV108=Value},v2z:function(Value){gx.O.ZV13GXV108=Value},v2c:function(row){gx.fn.setGridControlValue("CTLOPCAOCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(5),gx.O.GXV108,0)},c2v:function(){gx.O.GXV108=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLOPCAOCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[9]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLOPCAOCLASSIFICACAODESCRICAO",gxz:"ZV14GXV109",gxold:"OV14GXV109",gxvar:"GXV109",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV109=Value},v2z:function(Value){gx.O.ZV14GXV109=Value},v2c:function(row){gx.fn.setGridControlValue("CTLOPCAOCLASSIFICACAODESCRICAO",row || gx.fn.currentGridRowImpl(5),gx.O.GXV109,0)},c2v:function(){gx.O.GXV109=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLOPCAOCLASSIFICACAODESCRICAO",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   this.ZV11GXV106 = "" ;
   this.OV11GXV106 = "" ;
   this.ZV12GXV107 = "" ;
   this.OV12GXV107 = "" ;
   this.ZV13GXV108 = "" ;
   this.OV13GXV108 = "" ;
   this.ZV14GXV109 = "" ;
   this.OV14GXV109 = "" ;
   this.AV7PessoaId = 0 ;
   this.GXV106 = "" ;
   this.GXV107 = "" ;
   this.GXV108 = "" ;
   this.GXV109 = "" ;
   this.Events = {"e111ym2_client": ["'FECHAR'", true] ,"e141ym2_client": ["ENTER", true] ,"e151ym2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID3_nFirstRecordOnPage'},{av:'GRID3_nEOF'},{av:'AV5ClassificacaoPessoaItens',fld:'vCLASSIFICACAOPESSOAITENS',grid:5}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setVCMap("AV7PessoaId", "vPESSOAID", 0, "int");
   this.addGridBCProperty("Classificacaopessoaitens", ["ClassificacaoId"], this.GXValidFnc[6], "AV5ClassificacaoPessoaItens");
   this.addGridBCProperty("Classificacaopessoaitens", ["ClassificacaoDescricao"], this.GXValidFnc[7], "AV5ClassificacaoPessoaItens");
   this.addGridBCProperty("Classificacaopessoaitens", ["OpcaoClassificacaoId"], this.GXValidFnc[8], "AV5ClassificacaoPessoaItens");
   this.addGridBCProperty("Classificacaopessoaitens", ["OpcaoClassificacaoDescricao"], this.GXValidFnc[9], "AV5ClassificacaoPessoaItens");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultapessoasclassificacao());
