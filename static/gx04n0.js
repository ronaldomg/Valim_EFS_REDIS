/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:50:12.30
*/
gx.evt.autoSkip = false;
gx.define('gx04n0', false, function () {
   this.ServerClass =  "gx04n0" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV12pLogTabelaId=gx.fn.getIntegerValue("vPLOGTABELAID",'.') ;
   };
   this.Validv_Clogtabelaoperacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLOGTABELAOPERACAO");
         this.AnyError  = 0;
         if ( ! ( this.AV8cLogTabelaOperacao == "I" || this.AV8cLogTabelaOperacao == "U" || this.AV8cLogTabelaOperacao == "D" || (""==this.AV8cLogTabelaOperacao) ) )
         {
            try {
               gxballoon.setError("Campo cLogTabelaOperacao fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e131kt2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141kt1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,55];
   this.GXLastCtrlId =55;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx04n0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1614,48,"LOGTABELAID","Tabela Id","","LogTabelaId","int",0,"px",16,16,"right",null,[],1614,"LogTabelaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1603,49,"LOGTABELANOME","Nome da Tabela","Selecionar","LogTabelaNome","svchar",0,"px",31,31,"left",null,[],1603,"LogTabelaNome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(1604,50,"LOGTABELAOPERACAO","Operacao","LogTabelaOperacao","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(1605,51,"LOGTABELADATAHORA","Data Hora","","LogTabelaDataHora","dtime",0,"px",19,19,"right",null,[],1605,"LogTabelaDataHora",true,8,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1606,52,"LOGTABELAUSUARIO","Usuario","","LogTabelaUsuario","svchar",0,"px",31,31,"left",null,[],1606,"LogTabelaUsuario",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKLOGTABELAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:16,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLOGTABELAID",gxz:"ZV6cLogTabelaId",gxold:"OV6cLogTabelaId",gxvar:"AV6cLogTabelaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cLogTabelaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cLogTabelaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLOGTABELAID",gx.O.AV6cLogTabelaId,0)},c2v:function(){gx.O.AV6cLogTabelaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLOGTABELAID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKLOGTABELANOME", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLOGTABELANOME",gxz:"ZV7cLogTabelaNome",gxold:"OV7cLogTabelaNome",gxvar:"AV7cLogTabelaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cLogTabelaNome=Value},v2z:function(Value){gx.O.ZV7cLogTabelaNome=Value},v2c:function(){gx.fn.setControlValue("vCLOGTABELANOME",gx.O.AV7cLogTabelaNome,0)},c2v:function(){gx.O.AV7cLogTabelaNome=this.val()},val:function(){return gx.fn.getControlValue("vCLOGTABELANOME")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKLOGTABELAOPERACAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Clogtabelaoperacao,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLOGTABELAOPERACAO",gxz:"ZV8cLogTabelaOperacao",gxold:"OV8cLogTabelaOperacao",gxvar:"AV8cLogTabelaOperacao",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV8cLogTabelaOperacao=Value},v2z:function(Value){gx.O.ZV8cLogTabelaOperacao=Value},v2c:function(){gx.fn.setComboBoxValue("vCLOGTABELAOPERACAO",gx.O.AV8cLogTabelaOperacao)},c2v:function(){gx.O.AV8cLogTabelaOperacao=this.val()},val:function(){return gx.fn.getControlValue("vCLOGTABELAOPERACAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKLOGTABELADATAHORA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"dtime",len:10,dec:8,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLOGTABELADATAHORA",gxz:"ZV9cLogTabelaDataHora",gxold:"OV9cLogTabelaDataHora",gxvar:"AV9cLogTabelaDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99:99",dec:8},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cLogTabelaDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9cLogTabelaDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCLOGTABELADATAHORA",gx.O.AV9cLogTabelaDataHora,0)},c2v:function(){gx.O.AV9cLogTabelaDataHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCLOGTABELADATAHORA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKLOGTABELAUSUARIO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLOGTABELAUSUARIO",gxz:"ZV10cLogTabelaUsuario",gxold:"OV10cLogTabelaUsuario",gxvar:"AV10cLogTabelaUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cLogTabelaUsuario=Value},v2z:function(Value){gx.O.ZV10cLogTabelaUsuario=Value},v2c:function(){gx.fn.setControlValue("vCLOGTABELAUSUARIO",gx.O.AV10cLogTabelaUsuario,0)},c2v:function(){gx.O.AV10cLogTabelaUsuario=this.val()},val:function(){return gx.fn.getControlValue("vCLOGTABELAUSUARIO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKLOGTABELACHAVE", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLOGTABELACHAVE",gxz:"ZV11cLogTabelaChave",gxold:"OV11cLogTabelaChave",gxvar:"AV11cLogTabelaChave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cLogTabelaChave=Value},v2z:function(Value){gx.O.ZV11cLogTabelaChave=Value},v2c:function(){gx.fn.setControlValue("vCLOGTABELACHAVE",gx.O.AV11cLogTabelaChave,0)},c2v:function(){gx.O.AV11cLogTabelaChave=this.val()},val:function(){return gx.fn.getControlValue("vCLOGTABELACHAVE")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV15Linkselection_GXI)},c2v:function(){gx.O.AV15Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV15Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:16,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOGTABELAID",gxz:"Z1614LogTabelaId",gxold:"O1614LogTabelaId",gxvar:"A1614LogTabelaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1614LogTabelaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1614LogTabelaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LOGTABELAID",row || gx.fn.currentGridRowImpl(46),gx.O.A1614LogTabelaId,0)},c2v:function(){gx.O.A1614LogTabelaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LOGTABELAID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:31,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOGTABELANOME",gxz:"Z1603LogTabelaNome",gxold:"O1603LogTabelaNome",gxvar:"A1603LogTabelaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1603LogTabelaNome=Value},v2z:function(Value){gx.O.Z1603LogTabelaNome=Value},v2c:function(row){gx.fn.setGridControlValue("LOGTABELANOME",row || gx.fn.currentGridRowImpl(46),gx.O.A1603LogTabelaNome,0)},c2v:function(){gx.O.A1603LogTabelaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("LOGTABELANOME",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOGTABELAOPERACAO",gxz:"Z1604LogTabelaOperacao",gxold:"O1604LogTabelaOperacao",gxvar:"A1604LogTabelaOperacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1604LogTabelaOperacao=Value},v2z:function(Value){gx.O.Z1604LogTabelaOperacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("LOGTABELAOPERACAO",row || gx.fn.currentGridRowImpl(46),gx.O.A1604LogTabelaOperacao);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1604LogTabelaOperacao=this.val()},val:function(row){return gx.fn.getGridControlValue("LOGTABELAOPERACAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"dtime",len:10,dec:8,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOGTABELADATAHORA",gxz:"Z1605LogTabelaDataHora",gxold:"O1605LogTabelaDataHora",gxvar:"A1605LogTabelaDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99:99",dec:8},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1605LogTabelaDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1605LogTabelaDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("LOGTABELADATAHORA",row || gx.fn.currentGridRowImpl(46),gx.O.A1605LogTabelaDataHora,0)},c2v:function(){gx.O.A1605LogTabelaDataHora=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("LOGTABELADATAHORA",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"svchar",len:31,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOGTABELAUSUARIO",gxz:"Z1606LogTabelaUsuario",gxold:"O1606LogTabelaUsuario",gxvar:"A1606LogTabelaUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1606LogTabelaUsuario=Value},v2z:function(Value){gx.O.Z1606LogTabelaUsuario=Value},v2c:function(row){gx.fn.setGridControlValue("LOGTABELAUSUARIO",row || gx.fn.currentGridRowImpl(46),gx.O.A1606LogTabelaUsuario,0)},c2v:function(){gx.O.A1606LogTabelaUsuario=this.val()},val:function(row){return gx.fn.getGridControlValue("LOGTABELAUSUARIO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TABLE4",grid:0};
   this.AV6cLogTabelaId = 0 ;
   this.ZV6cLogTabelaId = 0 ;
   this.OV6cLogTabelaId = 0 ;
   this.AV7cLogTabelaNome = "" ;
   this.ZV7cLogTabelaNome = "" ;
   this.OV7cLogTabelaNome = "" ;
   this.AV8cLogTabelaOperacao = "" ;
   this.ZV8cLogTabelaOperacao = "" ;
   this.OV8cLogTabelaOperacao = "" ;
   this.AV9cLogTabelaDataHora = gx.date.nullDate() ;
   this.ZV9cLogTabelaDataHora = gx.date.nullDate() ;
   this.OV9cLogTabelaDataHora = gx.date.nullDate() ;
   this.AV10cLogTabelaUsuario = "" ;
   this.ZV10cLogTabelaUsuario = "" ;
   this.OV10cLogTabelaUsuario = "" ;
   this.AV11cLogTabelaChave = "" ;
   this.ZV11cLogTabelaChave = "" ;
   this.OV11cLogTabelaChave = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1614LogTabelaId = 0 ;
   this.O1614LogTabelaId = 0 ;
   this.Z1603LogTabelaNome = "" ;
   this.O1603LogTabelaNome = "" ;
   this.Z1604LogTabelaOperacao = "" ;
   this.O1604LogTabelaOperacao = "" ;
   this.Z1605LogTabelaDataHora = gx.date.nullDate() ;
   this.O1605LogTabelaDataHora = gx.date.nullDate() ;
   this.Z1606LogTabelaUsuario = "" ;
   this.O1606LogTabelaUsuario = "" ;
   this.AV6cLogTabelaId = 0 ;
   this.AV7cLogTabelaNome = "" ;
   this.AV8cLogTabelaOperacao = "" ;
   this.AV9cLogTabelaDataHora = gx.date.nullDate() ;
   this.AV10cLogTabelaUsuario = "" ;
   this.AV11cLogTabelaChave = "" ;
   this.AV12pLogTabelaId = 0 ;
   this.A1607LogTabelaChave = "" ;
   this.AV5LinkSelection = "" ;
   this.A1614LogTabelaId = 0 ;
   this.A1603LogTabelaNome = "" ;
   this.A1604LogTabelaOperacao = "" ;
   this.A1605LogTabelaDataHora = gx.date.nullDate() ;
   this.A1606LogTabelaUsuario = "" ;
   this.Events = {"e131kt2_client": ["ENTER", true] ,"e141kt1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLogTabelaId',fld:'vCLOGTABELAID'},{av:'AV7cLogTabelaNome',fld:'vCLOGTABELANOME'},{av:'AV8cLogTabelaOperacao',fld:'vCLOGTABELAOPERACAO'},{av:'AV9cLogTabelaDataHora',fld:'vCLOGTABELADATAHORA'},{av:'AV10cLogTabelaUsuario',fld:'vCLOGTABELAUSUARIO'},{av:'AV11cLogTabelaChave',fld:'vCLOGTABELACHAVE'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1614LogTabelaId',fld:'LOGTABELAID'}],[{av:'AV12pLogTabelaId',fld:'vPLOGTABELAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLogTabelaId',fld:'vCLOGTABELAID'},{av:'AV7cLogTabelaNome',fld:'vCLOGTABELANOME'},{av:'AV8cLogTabelaOperacao',fld:'vCLOGTABELAOPERACAO'},{av:'AV9cLogTabelaDataHora',fld:'vCLOGTABELADATAHORA'},{av:'AV10cLogTabelaUsuario',fld:'vCLOGTABELAUSUARIO'},{av:'AV11cLogTabelaChave',fld:'vCLOGTABELACHAVE'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLogTabelaId',fld:'vCLOGTABELAID'},{av:'AV7cLogTabelaNome',fld:'vCLOGTABELANOME'},{av:'AV8cLogTabelaOperacao',fld:'vCLOGTABELAOPERACAO'},{av:'AV9cLogTabelaDataHora',fld:'vCLOGTABELADATAHORA'},{av:'AV10cLogTabelaUsuario',fld:'vCLOGTABELAUSUARIO'},{av:'AV11cLogTabelaChave',fld:'vCLOGTABELACHAVE'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLogTabelaId',fld:'vCLOGTABELAID'},{av:'AV7cLogTabelaNome',fld:'vCLOGTABELANOME'},{av:'AV8cLogTabelaOperacao',fld:'vCLOGTABELAOPERACAO'},{av:'AV9cLogTabelaDataHora',fld:'vCLOGTABELADATAHORA'},{av:'AV10cLogTabelaUsuario',fld:'vCLOGTABELAUSUARIO'},{av:'AV11cLogTabelaChave',fld:'vCLOGTABELACHAVE'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLogTabelaId',fld:'vCLOGTABELAID'},{av:'AV7cLogTabelaNome',fld:'vCLOGTABELANOME'},{av:'AV8cLogTabelaOperacao',fld:'vCLOGTABELAOPERACAO'},{av:'AV9cLogTabelaDataHora',fld:'vCLOGTABELADATAHORA'},{av:'AV10cLogTabelaUsuario',fld:'vCLOGTABELAUSUARIO'},{av:'AV11cLogTabelaChave',fld:'vCLOGTABELACHAVE'}],[]];
   this.setVCMap("AV12pLogTabelaId", "vPLOGTABELAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx04n0());
