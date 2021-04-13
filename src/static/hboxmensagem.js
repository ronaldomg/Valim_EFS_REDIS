/**@preserve  GeneXus Java 10_3_12-110051 on February 10, 2021 17:26:2.39
*/
gx.evt.autoSkip = false;
gx.define('hboxmensagem', true, function (CmpContext) {
   this.ServerClass =  "hboxmensagem" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setCmpContext(CmpContext);
   this.ReadonlyForm = true;
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV9UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A364UsuarioEnviouNome=gx.fn.getControlValue("USUARIOENVIOUNOME") ;
   };
   this.Valid_Mensagemusuariodataapresentaca=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(10) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("MENSAGEMUSUARIODATAAPRESENTACA", gx.fn.currentGridRowImpl(10));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e150j2_client=function()
   {
      this.executeServerEvent("'LERMENSAGEM'", true, arguments[0], false, false);
   };
   this.e110j2_client=function()
   {
      this.executeServerEvent("'NOVAMENSAGEM'", true, null, false, false);
   };
   this.e120j2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e130j2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e170j2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e180j2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,7,13,16,17,20,21,22,26,29,31,33];
   this.GXLastCtrlId =33;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",10,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hboxmensagem",[],true,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.startRow("","","","","","");
   Grid1Container.startCell("","left","","","","","","","","");
   Grid1Container.startTable("Table2",13,"180px");
   Grid1Container.addHtmlCode("<tbody>");
   Grid1Container.startRow("","","","","","");
   Grid1Container.startCell("","","","","","","","2","","");
   Grid1Container.addTextBlock('TEXTBLOCK1',null);
   Grid1Container.addSingleLineEdit("Nmaux",17,"vNMAUX","","","NmAux","svchar",18,"chr",18,18,"left",null,[],"Nmaux","NmAux",true,0,false,false,"Attribute",1,"");
   Grid1Container.endCell();
   Grid1Container.endRow();
   Grid1Container.startRow("","","","","","");
   Grid1Container.startCell("","","","","","","","2","","");
   Grid1Container.addTextBlock('TEXTBLOCK2',null);
   Grid1Container.addSingleLineEdit(357,21,"MENSAGEMUSUARIODATAAPRESENTACA","","","MensagemUsuarioDataApresentaca","dtime",16,"chr",16,16,"right",null,[],357,"MensagemUsuarioDataApresentaca",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(365,22,"MENSAGEMUSUARIOID","","","MensagemUsuarioId","int",7,"chr",7,7,"right",null,[],365,"MensagemUsuarioId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addHtmlCode("&nbsp; ");
   Grid1Container.addBitmap("Imgmsg","IMGMSG",23,0,"px",0,"px","e150j2_client","","Ler Mensagem","Image","");
   Grid1Container.endCell();
   Grid1Container.endRow();
   Grid1Container.addHtmlCode("</tbody>");
   Grid1Container.endTable();
   Grid1Container.endCell();
   Grid1Container.endRow();
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TABLE4",grid:0};
   GXValidFnc[13]={fld:"TABLE2",grid:10};
   GXValidFnc[16]={fld:"TEXTBLOCK1", format:0,grid:10};
   GXValidFnc[17]={lvl:2,type:"svchar",len:18,dec:0,sign:false,ro:0,isacc:0,grid:10,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNMAUX",gxz:"ZV19NmAux",gxold:"OV19NmAux",gxvar:"AV19NmAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV19NmAux=Value},v2z:function(Value){gx.O.ZV19NmAux=Value},v2c:function(row){gx.fn.setGridControlValue("vNMAUX",row || gx.fn.currentGridRowImpl(10),gx.O.AV19NmAux,0)},c2v:function(){gx.O.AV19NmAux=this.val()},val:function(row){return gx.fn.getGridControlValue("vNMAUX",row || gx.fn.currentGridRowImpl(10))},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:10};
   GXValidFnc[21]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:10,gxgrid:this.Grid1Container,fnc:this.Valid_Mensagemusuariodataapresentaca,isvalid:null,rgrid:[],fld:"MENSAGEMUSUARIODATAAPRESENTACA",gxz:"Z357MensagemUsuarioDataApresentaca",gxold:"O357MensagemUsuarioDataApresentaca",gxvar:"A357MensagemUsuarioDataApresentaca",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[21],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A357MensagemUsuarioDataApresentaca=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z357MensagemUsuarioDataApresentaca=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MENSAGEMUSUARIODATAAPRESENTACA",row || gx.fn.currentGridRowImpl(10),gx.O.A357MensagemUsuarioDataApresentaca,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A357MensagemUsuarioDataApresentaca=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MENSAGEMUSUARIODATAAPRESENTACA",row || gx.fn.currentGridRowImpl(10))},nac:gx.falseFn};
   GXValidFnc[22]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:10,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGEMUSUARIOID",gxz:"Z365MensagemUsuarioId",gxold:"O365MensagemUsuarioId",gxvar:"A365MensagemUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A365MensagemUsuarioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z365MensagemUsuarioId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENSAGEMUSUARIOID",row || gx.fn.currentGridRowImpl(10),gx.O.A365MensagemUsuarioId,0)},c2v:function(){gx.O.A365MensagemUsuarioId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENSAGEMUSUARIOID",row || gx.fn.currentGridRowImpl(10),'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TABLE3",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"IMGNEWMSG",grid:0};
   GXValidFnc[33]={fld:"IMAGE1",grid:0};
   this.ZV19NmAux = "" ;
   this.OV19NmAux = "" ;
   this.Z357MensagemUsuarioDataApresentaca = gx.date.nullDate() ;
   this.O357MensagemUsuarioDataApresentaca = gx.date.nullDate() ;
   this.Z365MensagemUsuarioId = 0 ;
   this.O365MensagemUsuarioId = 0 ;
   this.A364UsuarioEnviouNome = "" ;
   this.A361MensagemUsuarioExcluidaRecebid = "" ;
   this.A359MensagemUsuarioSnLida = "" ;
   this.A75UsuarioId = "" ;
   this.A363UsuarioEnviouId = "" ;
   this.AV19NmAux = "" ;
   this.A357MensagemUsuarioDataApresentaca = gx.date.nullDate() ;
   this.A365MensagemUsuarioId = 0 ;
   this.AV9UsrCod = "" ;
   this.Events = {"e150j2_client": ["'LERMENSAGEM'", true] ,"e110j2_client": ["'NOVAMENSAGEM'", true] ,"e120j2_client": ["'PROXIMO'", true] ,"e130j2_client": ["'ANTERIOR'", true] ,"e170j2_client": ["ENTER", true] ,"e180j2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV9UsrCod',fld:'vUSRCOD',hsh:true},{av:'gx.fn.getCtrlProperty("MENSAGEMUSUARIOID","Visible")',ctrl:'MENSAGEMUSUARIOID',prop:'Visible'},{av:'A364UsuarioEnviouNome',fld:'USUARIOENVIOUNOME'},{av:'sPrefix'}],[]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'A364UsuarioEnviouNome',fld:'USUARIOENVIOUNOME'}],[{av:'gx.fn.getCtrlProperty("TABLE1","Visible")',ctrl:'TABLE1',prop:'Visible'},{av:'AV19NmAux',fld:'vNMAUX'}]];
   this.EvtParms["'LERMENSAGEM'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV9UsrCod',fld:'vUSRCOD',hsh:true},{av:'gx.fn.getCtrlProperty("MENSAGEMUSUARIOID","Visible")',ctrl:'MENSAGEMUSUARIOID',prop:'Visible'},{av:'A364UsuarioEnviouNome',fld:'USUARIOENVIOUNOME'},{av:'sPrefix'},{av:'A365MensagemUsuarioId',fld:'MENSAGEMUSUARIOID'}],[]];
   this.EvtParms["'NOVAMENSAGEM'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV9UsrCod',fld:'vUSRCOD',hsh:true},{av:'gx.fn.getCtrlProperty("MENSAGEMUSUARIOID","Visible")',ctrl:'MENSAGEMUSUARIOID',prop:'Visible'},{av:'A364UsuarioEnviouNome',fld:'USUARIOENVIOUNOME'},{av:'sPrefix'}],[]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV9UsrCod',fld:'vUSRCOD',hsh:true},{av:'gx.fn.getCtrlProperty("MENSAGEMUSUARIOID","Visible")',ctrl:'MENSAGEMUSUARIOID',prop:'Visible'},{av:'A364UsuarioEnviouNome',fld:'USUARIOENVIOUNOME'},{av:'sPrefix'}],[]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV9UsrCod',fld:'vUSRCOD',hsh:true},{av:'gx.fn.getCtrlProperty("MENSAGEMUSUARIOID","Visible")',ctrl:'MENSAGEMUSUARIOID',prop:'Visible'},{av:'A364UsuarioEnviouNome',fld:'USUARIOENVIOUNOME'},{av:'sPrefix'}],[]];
   this.setVCMap("AV9UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A364UsuarioEnviouNome", "USUARIOENVIOUNOME", 0, "svchar");
   this.setVCMap("AV9UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A364UsuarioEnviouNome", "USUARIOENVIOUNOME", 0, "svchar");
   Grid1Container.addRefreshingVar({rfrVar:"AV9UsrCod"});
   Grid1Container.addRefreshingVar({rfrVar:"A365MensagemUsuarioId", rfrProp:"Visible", gxAttId:"365"});
   Grid1Container.addRefreshingVar({rfrVar:"A364UsuarioEnviouNome"});
   this.InitStandaloneVars( );
});
gx.setExecutableComponent("hboxmensagem");
