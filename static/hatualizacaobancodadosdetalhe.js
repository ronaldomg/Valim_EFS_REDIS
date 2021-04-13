/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:0:25.86
*/
gx.evt.autoSkip = false;
gx.define('hatualizacaobancodadosdetalhe', false, function () {
   this.ServerClass =  "hatualizacaobancodadosdetalhe" ;
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
      this.AV7ScriptSqlProcesso=gx.fn.getIntegerValue("vSCRIPTSQLPROCESSO",'.') ;
      this.AV8ScriptSqlOrdemServico=gx.fn.getIntegerValue("vSCRIPTSQLORDEMSERVICO",'.') ;
   };
   this.e1121c2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1321c2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1421c2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,7,8,9,10,11];
   this.GXLastCtrlId =11;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",5,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hatualizacaobancodadosdetalhe",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(9851,6,"SCRIPTSQLSEQUENCIA","","","ScriptSqlSequencia","int",0,"px",4,4,"right",null,[],9851,"ScriptSqlSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9861,7,"SCRIPTSQLDESCRICAO","Descrição","","ScriptSqlDescricao","svchar",0,"px",100,80,"left",null,[],9861,"ScriptSqlDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(9863,8,"SCRIPTSQLDESCRICAOSTATUS","Status","","ScriptSqlDescricaoStatus","vchar",0,"px",2097152,80,"left",null,[],9863,"ScriptSqlDescricaoStatus",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(9862,9,"SCRIPTSQLSTATUS","Status","","ScriptSqlStatus","int",0,"px",1,1,"right",null,[],9862,"ScriptSqlStatus",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9850,10,"SCRIPTSQLPROCESSO","Número do Processo","","ScriptSqlProcesso","int",0,"px",4,4,"right",null,[],9850,"ScriptSqlProcesso",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9852,11,"SCRIPTSQLORDEMSERVICO","Ordem de Serviço","","ScriptSqlOrdemServico","int",0,"px",8,8,"right",null,[],9852,"ScriptSqlOrdemServico",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SCRIPTSQLSEQUENCIA",gxz:"Z9851ScriptSqlSequencia",gxold:"O9851ScriptSqlSequencia",gxvar:"A9851ScriptSqlSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9851ScriptSqlSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9851ScriptSqlSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SCRIPTSQLSEQUENCIA",row || gx.fn.currentGridRowImpl(5),gx.O.A9851ScriptSqlSequencia,0)},c2v:function(){gx.O.A9851ScriptSqlSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SCRIPTSQLSEQUENCIA",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[7]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SCRIPTSQLDESCRICAO",gxz:"Z9861ScriptSqlDescricao",gxold:"O9861ScriptSqlDescricao",gxvar:"A9861ScriptSqlDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9861ScriptSqlDescricao=Value},v2z:function(Value){gx.O.Z9861ScriptSqlDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("SCRIPTSQLDESCRICAO",row || gx.fn.currentGridRowImpl(5),gx.O.A9861ScriptSqlDescricao,0)},c2v:function(){gx.O.A9861ScriptSqlDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("SCRIPTSQLDESCRICAO",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[8]={lvl:2,type:"vchar",len:2097152,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SCRIPTSQLDESCRICAOSTATUS",gxz:"Z9863ScriptSqlDescricaoStatus",gxold:"O9863ScriptSqlDescricaoStatus",gxvar:"A9863ScriptSqlDescricaoStatus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9863ScriptSqlDescricaoStatus=Value},v2z:function(Value){gx.O.Z9863ScriptSqlDescricaoStatus=Value},v2c:function(row){gx.fn.setGridControlValue("SCRIPTSQLDESCRICAOSTATUS",row || gx.fn.currentGridRowImpl(5),gx.O.A9863ScriptSqlDescricaoStatus,0)},c2v:function(){gx.O.A9863ScriptSqlDescricaoStatus=this.val()},val:function(row){return gx.fn.getGridControlValue("SCRIPTSQLDESCRICAOSTATUS",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[9]={lvl:2,type:"int",len:1,dec:0,sign:false,pic:"9",ro:1,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SCRIPTSQLSTATUS",gxz:"Z9862ScriptSqlStatus",gxold:"O9862ScriptSqlStatus",gxvar:"A9862ScriptSqlStatus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9862ScriptSqlStatus=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9862ScriptSqlStatus=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SCRIPTSQLSTATUS",row || gx.fn.currentGridRowImpl(5),gx.O.A9862ScriptSqlStatus,0)},c2v:function(){gx.O.A9862ScriptSqlStatus=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SCRIPTSQLSTATUS",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[10]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SCRIPTSQLPROCESSO",gxz:"Z9850ScriptSqlProcesso",gxold:"O9850ScriptSqlProcesso",gxvar:"A9850ScriptSqlProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9850ScriptSqlProcesso=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9850ScriptSqlProcesso=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SCRIPTSQLPROCESSO",row || gx.fn.currentGridRowImpl(5),gx.O.A9850ScriptSqlProcesso,0)},c2v:function(){gx.O.A9850ScriptSqlProcesso=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SCRIPTSQLPROCESSO",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SCRIPTSQLORDEMSERVICO",gxz:"Z9852ScriptSqlOrdemServico",gxold:"O9852ScriptSqlOrdemServico",gxvar:"A9852ScriptSqlOrdemServico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9852ScriptSqlOrdemServico=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9852ScriptSqlOrdemServico=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SCRIPTSQLORDEMSERVICO",row || gx.fn.currentGridRowImpl(5),gx.O.A9852ScriptSqlOrdemServico,0)},c2v:function(){gx.O.A9852ScriptSqlOrdemServico=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SCRIPTSQLORDEMSERVICO",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   this.Z9851ScriptSqlSequencia = 0 ;
   this.O9851ScriptSqlSequencia = 0 ;
   this.Z9861ScriptSqlDescricao = "" ;
   this.O9861ScriptSqlDescricao = "" ;
   this.Z9863ScriptSqlDescricaoStatus = "" ;
   this.O9863ScriptSqlDescricaoStatus = "" ;
   this.Z9862ScriptSqlStatus = 0 ;
   this.O9862ScriptSqlStatus = 0 ;
   this.Z9850ScriptSqlProcesso = 0 ;
   this.O9850ScriptSqlProcesso = 0 ;
   this.Z9852ScriptSqlOrdemServico = 0 ;
   this.O9852ScriptSqlOrdemServico = 0 ;
   this.AV7ScriptSqlProcesso = 0 ;
   this.AV8ScriptSqlOrdemServico = 0 ;
   this.A9851ScriptSqlSequencia = 0 ;
   this.A9861ScriptSqlDescricao = "" ;
   this.A9863ScriptSqlDescricaoStatus = "" ;
   this.A9862ScriptSqlStatus = 0 ;
   this.A9850ScriptSqlProcesso = 0 ;
   this.A9852ScriptSqlOrdemServico = 0 ;
   this.Events = {"e1121c2_client": ["'FECHAR'", true] ,"e1321c2_client": ["ENTER", true] ,"e1421c2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV7ScriptSqlProcesso',fld:'vSCRIPTSQLPROCESSO',hsh:true},{av:'AV8ScriptSqlOrdemServico',fld:'vSCRIPTSQLORDEMSERVICO',hsh:true}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setVCMap("AV7ScriptSqlProcesso", "vSCRIPTSQLPROCESSO", 0, "int");
   this.setVCMap("AV8ScriptSqlOrdemServico", "vSCRIPTSQLORDEMSERVICO", 0, "int");
   this.setVCMap("AV7ScriptSqlProcesso", "vSCRIPTSQLPROCESSO", 0, "int");
   this.setVCMap("AV8ScriptSqlOrdemServico", "vSCRIPTSQLORDEMSERVICO", 0, "int");
   Grid1Container.addRefreshingVar({rfrVar:"AV7ScriptSqlProcesso"});
   Grid1Container.addRefreshingVar({rfrVar:"AV8ScriptSqlOrdemServico"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hatualizacaobancodadosdetalhe());
