/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:31:43.58
*/
gx.evt.autoSkip = false;
gx.define('gx01h1', false, function () {
   this.ServerClass =  "gx01h1" ;
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
      this.AV12pSistemaId=gx.fn.getControlValue("vPSISTEMAID") ;
      this.AV13pProgramaId=gx.fn.getIntegerValue("vPPROGRAMAID",'.') ;
   };
   this.Validv_Cprogramaprivilegio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCPROGRAMAPRIVILEGIO");
         this.AnyError  = 0;
         if ( ! ( this.AV11cProgramaPrivilegio == "A" || this.AV11cProgramaPrivilegio == "P" || this.AV11cProgramaPrivilegio == "N" || (""==this.AV11cProgramaPrivilegio) ) )
         {
            try {
               gxballoon.setError("Campo cProgramaPrivilegio fora do intervalo");
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
   this.e131n92_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141n91_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,53,56];
   this.GXLastCtrlId =56;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx01h1",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(141,48,"PROGRAMAID","Código do Programa","","ProgramaId","int",0,"px",4,4,"right",null,[],141,"ProgramaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(145,49,"PROGRAMANOME","Nome Programa","Selecionar","ProgramaNome","svchar",0,"px",40,40,"left",null,[],145,"ProgramaNome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(497,50,"PROGRAMATIPO","Tipo","ProgramaTipo","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(498,51,"PROGRAMALINK","Link","","ProgramaLink","svchar",0,"px",40,40,"left",null,[],498,"ProgramaLink",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(499,52,"PROGRAMAATIVO","Programa Ativo?","","ProgramaAtivo","char",0,"px",1,1,"left",null,[],499,"ProgramaAtivo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(140,53,"SISTEMAID","Sistema","","SistemaId","char",0,"px",8,8,"left",null,[],140,"SistemaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKPROGRAMAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPROGRAMAID",gxz:"ZV6cProgramaId",gxold:"OV6cProgramaId",gxvar:"AV6cProgramaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cProgramaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cProgramaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPROGRAMAID",gx.O.AV6cProgramaId,0)},c2v:function(){gx.O.AV6cProgramaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPROGRAMAID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKPROGRAMANOME", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPROGRAMANOME",gxz:"ZV7cProgramaNome",gxold:"OV7cProgramaNome",gxvar:"AV7cProgramaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cProgramaNome=Value},v2z:function(Value){gx.O.ZV7cProgramaNome=Value},v2c:function(){gx.fn.setControlValue("vCPROGRAMANOME",gx.O.AV7cProgramaNome,0)},c2v:function(){gx.O.AV7cProgramaNome=this.val()},val:function(){return gx.fn.getControlValue("vCPROGRAMANOME")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKPROGRAMATIPO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPROGRAMATIPO",gxz:"ZV8cProgramaTipo",gxold:"OV8cProgramaTipo",gxvar:"AV8cProgramaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV8cProgramaTipo=Value},v2z:function(Value){gx.O.ZV8cProgramaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCPROGRAMATIPO",gx.O.AV8cProgramaTipo)},c2v:function(){gx.O.AV8cProgramaTipo=this.val()},val:function(){return gx.fn.getControlValue("vCPROGRAMATIPO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKPROGRAMALINK", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPROGRAMALINK",gxz:"ZV9cProgramaLink",gxold:"OV9cProgramaLink",gxvar:"AV9cProgramaLink",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cProgramaLink=Value},v2z:function(Value){gx.O.ZV9cProgramaLink=Value},v2c:function(){gx.fn.setControlValue("vCPROGRAMALINK",gx.O.AV9cProgramaLink,0)},c2v:function(){gx.O.AV9cProgramaLink=this.val()},val:function(){return gx.fn.getControlValue("vCPROGRAMALINK")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKPROGRAMAATIVO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPROGRAMAATIVO",gxz:"ZV10cProgramaAtivo",gxold:"OV10cProgramaAtivo",gxvar:"AV10cProgramaAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cProgramaAtivo=Value},v2z:function(Value){gx.O.ZV10cProgramaAtivo=Value},v2c:function(){gx.fn.setControlValue("vCPROGRAMAATIVO",gx.O.AV10cProgramaAtivo,0)},c2v:function(){gx.O.AV10cProgramaAtivo=this.val()},val:function(){return gx.fn.getControlValue("vCPROGRAMAATIVO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKPROGRAMAPRIVILEGIO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cprogramaprivilegio,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPROGRAMAPRIVILEGIO",gxz:"ZV11cProgramaPrivilegio",gxold:"OV11cProgramaPrivilegio",gxvar:"AV11cProgramaPrivilegio",ucs:[],op:[39],ip:[39],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11cProgramaPrivilegio=Value},v2z:function(Value){gx.O.ZV11cProgramaPrivilegio=Value},v2c:function(){gx.fn.setComboBoxValue("vCPROGRAMAPRIVILEGIO",gx.O.AV11cProgramaPrivilegio)},c2v:function(){gx.O.AV11cProgramaPrivilegio=this.val()},val:function(){return gx.fn.getControlValue("vCPROGRAMAPRIVILEGIO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMAID",gxz:"Z141ProgramaId",gxold:"O141ProgramaId",gxvar:"A141ProgramaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A141ProgramaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z141ProgramaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROGRAMAID",row || gx.fn.currentGridRowImpl(46),gx.O.A141ProgramaId,0)},c2v:function(){gx.O.A141ProgramaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROGRAMAID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMANOME",gxz:"Z145ProgramaNome",gxold:"O145ProgramaNome",gxvar:"A145ProgramaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A145ProgramaNome=Value},v2z:function(Value){gx.O.Z145ProgramaNome=Value},v2c:function(row){gx.fn.setGridControlValue("PROGRAMANOME",row || gx.fn.currentGridRowImpl(46),gx.O.A145ProgramaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A145ProgramaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMANOME",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMATIPO",gxz:"Z497ProgramaTipo",gxold:"O497ProgramaTipo",gxvar:"A497ProgramaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A497ProgramaTipo=Value},v2z:function(Value){gx.O.Z497ProgramaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("PROGRAMATIPO",row || gx.fn.currentGridRowImpl(46),gx.O.A497ProgramaTipo)},c2v:function(){gx.O.A497ProgramaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMATIPO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMALINK",gxz:"Z498ProgramaLink",gxold:"O498ProgramaLink",gxvar:"A498ProgramaLink",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A498ProgramaLink=Value},v2z:function(Value){gx.O.Z498ProgramaLink=Value},v2c:function(row){gx.fn.setGridControlValue("PROGRAMALINK",row || gx.fn.currentGridRowImpl(46),gx.O.A498ProgramaLink,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A498ProgramaLink=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMALINK",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMAATIVO",gxz:"Z499ProgramaAtivo",gxold:"O499ProgramaAtivo",gxvar:"A499ProgramaAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A499ProgramaAtivo=Value},v2z:function(Value){gx.O.Z499ProgramaAtivo=Value},v2c:function(row){gx.fn.setGridControlValue("PROGRAMAATIVO",row || gx.fn.currentGridRowImpl(46),gx.O.A499ProgramaAtivo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A499ProgramaAtivo=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMAATIVO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMAID",gxz:"Z140SistemaId",gxold:"O140SistemaId",gxvar:"A140SistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A140SistemaId=Value},v2z:function(Value){gx.O.Z140SistemaId=Value},v2c:function(row){gx.fn.setGridControlValue("SISTEMAID",row || gx.fn.currentGridRowImpl(46),gx.O.A140SistemaId,0)},c2v:function(){gx.O.A140SistemaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SISTEMAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TABLE4",grid:0};
   this.AV6cProgramaId = 0 ;
   this.ZV6cProgramaId = 0 ;
   this.OV6cProgramaId = 0 ;
   this.AV7cProgramaNome = "" ;
   this.ZV7cProgramaNome = "" ;
   this.OV7cProgramaNome = "" ;
   this.AV8cProgramaTipo = "" ;
   this.ZV8cProgramaTipo = "" ;
   this.OV8cProgramaTipo = "" ;
   this.AV9cProgramaLink = "" ;
   this.ZV9cProgramaLink = "" ;
   this.OV9cProgramaLink = "" ;
   this.AV10cProgramaAtivo = "" ;
   this.ZV10cProgramaAtivo = "" ;
   this.OV10cProgramaAtivo = "" ;
   this.AV11cProgramaPrivilegio = "" ;
   this.ZV11cProgramaPrivilegio = "" ;
   this.OV11cProgramaPrivilegio = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z141ProgramaId = 0 ;
   this.O141ProgramaId = 0 ;
   this.Z145ProgramaNome = "" ;
   this.O145ProgramaNome = "" ;
   this.Z497ProgramaTipo = "" ;
   this.O497ProgramaTipo = "" ;
   this.Z498ProgramaLink = "" ;
   this.O498ProgramaLink = "" ;
   this.Z499ProgramaAtivo = "" ;
   this.O499ProgramaAtivo = "" ;
   this.Z140SistemaId = "" ;
   this.O140SistemaId = "" ;
   this.AV6cProgramaId = 0 ;
   this.AV7cProgramaNome = "" ;
   this.AV8cProgramaTipo = "" ;
   this.AV9cProgramaLink = "" ;
   this.AV10cProgramaAtivo = "" ;
   this.AV11cProgramaPrivilegio = "" ;
   this.AV12pSistemaId = "" ;
   this.AV13pProgramaId = 0 ;
   this.A500ProgramaPrivilegio = "" ;
   this.AV5LinkSelection = "" ;
   this.A141ProgramaId = 0 ;
   this.A145ProgramaNome = "" ;
   this.A497ProgramaTipo = "" ;
   this.A498ProgramaLink = "" ;
   this.A499ProgramaAtivo = "" ;
   this.A140SistemaId = "" ;
   this.Events = {"e131n92_client": ["ENTER", true] ,"e141n91_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProgramaId',fld:'vCPROGRAMAID'},{av:'AV7cProgramaNome',fld:'vCPROGRAMANOME'},{av:'AV8cProgramaTipo',fld:'vCPROGRAMATIPO'},{av:'AV9cProgramaLink',fld:'vCPROGRAMALINK'},{av:'AV10cProgramaAtivo',fld:'vCPROGRAMAATIVO'},{av:'AV11cProgramaPrivilegio',fld:'vCPROGRAMAPRIVILEGIO'},{av:'AV12pSistemaId',fld:'vPSISTEMAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A141ProgramaId',fld:'PROGRAMAID'}],[{av:'AV13pProgramaId',fld:'vPPROGRAMAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProgramaId',fld:'vCPROGRAMAID'},{av:'AV7cProgramaNome',fld:'vCPROGRAMANOME'},{av:'AV8cProgramaTipo',fld:'vCPROGRAMATIPO'},{av:'AV9cProgramaLink',fld:'vCPROGRAMALINK'},{av:'AV10cProgramaAtivo',fld:'vCPROGRAMAATIVO'},{av:'AV11cProgramaPrivilegio',fld:'vCPROGRAMAPRIVILEGIO'},{av:'AV12pSistemaId',fld:'vPSISTEMAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProgramaId',fld:'vCPROGRAMAID'},{av:'AV7cProgramaNome',fld:'vCPROGRAMANOME'},{av:'AV8cProgramaTipo',fld:'vCPROGRAMATIPO'},{av:'AV9cProgramaLink',fld:'vCPROGRAMALINK'},{av:'AV10cProgramaAtivo',fld:'vCPROGRAMAATIVO'},{av:'AV11cProgramaPrivilegio',fld:'vCPROGRAMAPRIVILEGIO'},{av:'AV12pSistemaId',fld:'vPSISTEMAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProgramaId',fld:'vCPROGRAMAID'},{av:'AV7cProgramaNome',fld:'vCPROGRAMANOME'},{av:'AV8cProgramaTipo',fld:'vCPROGRAMATIPO'},{av:'AV9cProgramaLink',fld:'vCPROGRAMALINK'},{av:'AV10cProgramaAtivo',fld:'vCPROGRAMAATIVO'},{av:'AV11cProgramaPrivilegio',fld:'vCPROGRAMAPRIVILEGIO'},{av:'AV12pSistemaId',fld:'vPSISTEMAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProgramaId',fld:'vCPROGRAMAID'},{av:'AV7cProgramaNome',fld:'vCPROGRAMANOME'},{av:'AV8cProgramaTipo',fld:'vCPROGRAMATIPO'},{av:'AV9cProgramaLink',fld:'vCPROGRAMALINK'},{av:'AV10cProgramaAtivo',fld:'vCPROGRAMAATIVO'},{av:'AV11cProgramaPrivilegio',fld:'vCPROGRAMAPRIVILEGIO'},{av:'AV12pSistemaId',fld:'vPSISTEMAID',hsh:true}],[]];
   this.setVCMap("AV12pSistemaId", "vPSISTEMAID", 0, "char");
   this.setVCMap("AV13pProgramaId", "vPPROGRAMAID", 0, "int");
   this.setVCMap("AV12pSistemaId", "vPSISTEMAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar({rfrVar:"AV12pSistemaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx01h1());
