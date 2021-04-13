/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:25:30.43
*/
gx.evt.autoSkip = false;
gx.define('gx01h0', false, function () {
   this.ServerClass =  "gx01h0" ;
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
      this.AV13pSistemaId=gx.fn.getControlValue("vPSISTEMAID") ;
      this.AV14pProgramaId=gx.fn.getIntegerValue("vPPROGRAMAID",'.') ;
   };
   this.Validv_Cprogramaprivilegio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCPROGRAMAPRIVILEGIO");
         this.AnyError  = 0;
         if ( ! ( this.AV12cProgramaPrivilegio == "A" || this.AV12cProgramaPrivilegio == "P" || this.AV12cProgramaPrivilegio == "N" || (""==this.AV12cProgramaPrivilegio) ) )
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
   this.e131iq2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141iq1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx01h0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(140,53,"SISTEMAID","Sistema","","SistemaId","char",0,"px",8,8,"left",null,[],140,"SistemaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(141,54,"PROGRAMAID","Código do Programa","","ProgramaId","int",0,"px",4,4,"right",null,[],141,"ProgramaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(145,55,"PROGRAMANOME","Nome Programa","Selecionar","ProgramaNome","svchar",0,"px",40,40,"left",null,[],145,"ProgramaNome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(497,56,"PROGRAMATIPO","Tipo","ProgramaTipo","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(498,57,"PROGRAMALINK","Link","","ProgramaLink","svchar",0,"px",40,40,"left",null,[],498,"ProgramaLink",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(499,58,"PROGRAMAATIVO","Programa Ativo?","","ProgramaAtivo","char",0,"px",1,1,"left",null,[],499,"ProgramaAtivo",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKSISTEMAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSISTEMAID",gxz:"ZV6cSistemaId",gxold:"OV6cSistemaId",gxvar:"AV6cSistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cSistemaId=Value},v2z:function(Value){gx.O.ZV6cSistemaId=Value},v2c:function(){gx.fn.setControlValue("vCSISTEMAID",gx.O.AV6cSistemaId,0)},c2v:function(){gx.O.AV6cSistemaId=this.val()},val:function(){return gx.fn.getControlValue("vCSISTEMAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKPROGRAMAID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPROGRAMAID",gxz:"ZV7cProgramaId",gxold:"OV7cProgramaId",gxvar:"AV7cProgramaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cProgramaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cProgramaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPROGRAMAID",gx.O.AV7cProgramaId,0)},c2v:function(){gx.O.AV7cProgramaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPROGRAMAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKPROGRAMANOME", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPROGRAMANOME",gxz:"ZV8cProgramaNome",gxold:"OV8cProgramaNome",gxvar:"AV8cProgramaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cProgramaNome=Value},v2z:function(Value){gx.O.ZV8cProgramaNome=Value},v2c:function(){gx.fn.setControlValue("vCPROGRAMANOME",gx.O.AV8cProgramaNome,0)},c2v:function(){gx.O.AV8cProgramaNome=this.val()},val:function(){return gx.fn.getControlValue("vCPROGRAMANOME")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKPROGRAMATIPO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPROGRAMATIPO",gxz:"ZV9cProgramaTipo",gxold:"OV9cProgramaTipo",gxvar:"AV9cProgramaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9cProgramaTipo=Value},v2z:function(Value){gx.O.ZV9cProgramaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCPROGRAMATIPO",gx.O.AV9cProgramaTipo)},c2v:function(){gx.O.AV9cProgramaTipo=this.val()},val:function(){return gx.fn.getControlValue("vCPROGRAMATIPO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKPROGRAMALINK", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPROGRAMALINK",gxz:"ZV10cProgramaLink",gxold:"OV10cProgramaLink",gxvar:"AV10cProgramaLink",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cProgramaLink=Value},v2z:function(Value){gx.O.ZV10cProgramaLink=Value},v2c:function(){gx.fn.setControlValue("vCPROGRAMALINK",gx.O.AV10cProgramaLink,0)},c2v:function(){gx.O.AV10cProgramaLink=this.val()},val:function(){return gx.fn.getControlValue("vCPROGRAMALINK")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKPROGRAMAATIVO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPROGRAMAATIVO",gxz:"ZV11cProgramaAtivo",gxold:"OV11cProgramaAtivo",gxvar:"AV11cProgramaAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cProgramaAtivo=Value},v2z:function(Value){gx.O.ZV11cProgramaAtivo=Value},v2c:function(){gx.fn.setControlValue("vCPROGRAMAATIVO",gx.O.AV11cProgramaAtivo,0)},c2v:function(){gx.O.AV11cProgramaAtivo=this.val()},val:function(){return gx.fn.getControlValue("vCPROGRAMAATIVO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKPROGRAMAPRIVILEGIO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cprogramaprivilegio,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPROGRAMAPRIVILEGIO",gxz:"ZV12cProgramaPrivilegio",gxold:"OV12cProgramaPrivilegio",gxvar:"AV12cProgramaPrivilegio",ucs:[],op:[44],ip:[44],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV12cProgramaPrivilegio=Value},v2z:function(Value){gx.O.ZV12cProgramaPrivilegio=Value},v2c:function(){gx.fn.setComboBoxValue("vCPROGRAMAPRIVILEGIO",gx.O.AV12cProgramaPrivilegio)},c2v:function(){gx.O.AV12cProgramaPrivilegio=this.val()},val:function(){return gx.fn.getControlValue("vCPROGRAMAPRIVILEGIO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMAID",gxz:"Z140SistemaId",gxold:"O140SistemaId",gxvar:"A140SistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A140SistemaId=Value},v2z:function(Value){gx.O.Z140SistemaId=Value},v2c:function(row){gx.fn.setGridControlValue("SISTEMAID",row || gx.fn.currentGridRowImpl(51),gx.O.A140SistemaId,0)},c2v:function(){gx.O.A140SistemaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SISTEMAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMAID",gxz:"Z141ProgramaId",gxold:"O141ProgramaId",gxvar:"A141ProgramaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A141ProgramaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z141ProgramaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROGRAMAID",row || gx.fn.currentGridRowImpl(51),gx.O.A141ProgramaId,0)},c2v:function(){gx.O.A141ProgramaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROGRAMAID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMANOME",gxz:"Z145ProgramaNome",gxold:"O145ProgramaNome",gxvar:"A145ProgramaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A145ProgramaNome=Value},v2z:function(Value){gx.O.Z145ProgramaNome=Value},v2c:function(row){gx.fn.setGridControlValue("PROGRAMANOME",row || gx.fn.currentGridRowImpl(51),gx.O.A145ProgramaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A145ProgramaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMANOME",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMATIPO",gxz:"Z497ProgramaTipo",gxold:"O497ProgramaTipo",gxvar:"A497ProgramaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A497ProgramaTipo=Value},v2z:function(Value){gx.O.Z497ProgramaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("PROGRAMATIPO",row || gx.fn.currentGridRowImpl(51),gx.O.A497ProgramaTipo)},c2v:function(){gx.O.A497ProgramaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMATIPO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMALINK",gxz:"Z498ProgramaLink",gxold:"O498ProgramaLink",gxvar:"A498ProgramaLink",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A498ProgramaLink=Value},v2z:function(Value){gx.O.Z498ProgramaLink=Value},v2c:function(row){gx.fn.setGridControlValue("PROGRAMALINK",row || gx.fn.currentGridRowImpl(51),gx.O.A498ProgramaLink,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A498ProgramaLink=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMALINK",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMAATIVO",gxz:"Z499ProgramaAtivo",gxold:"O499ProgramaAtivo",gxvar:"A499ProgramaAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A499ProgramaAtivo=Value},v2z:function(Value){gx.O.Z499ProgramaAtivo=Value},v2c:function(row){gx.fn.setGridControlValue("PROGRAMAATIVO",row || gx.fn.currentGridRowImpl(51),gx.O.A499ProgramaAtivo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A499ProgramaAtivo=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMAATIVO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cSistemaId = "" ;
   this.ZV6cSistemaId = "" ;
   this.OV6cSistemaId = "" ;
   this.AV7cProgramaId = 0 ;
   this.ZV7cProgramaId = 0 ;
   this.OV7cProgramaId = 0 ;
   this.AV8cProgramaNome = "" ;
   this.ZV8cProgramaNome = "" ;
   this.OV8cProgramaNome = "" ;
   this.AV9cProgramaTipo = "" ;
   this.ZV9cProgramaTipo = "" ;
   this.OV9cProgramaTipo = "" ;
   this.AV10cProgramaLink = "" ;
   this.ZV10cProgramaLink = "" ;
   this.OV10cProgramaLink = "" ;
   this.AV11cProgramaAtivo = "" ;
   this.ZV11cProgramaAtivo = "" ;
   this.OV11cProgramaAtivo = "" ;
   this.AV12cProgramaPrivilegio = "" ;
   this.ZV12cProgramaPrivilegio = "" ;
   this.OV12cProgramaPrivilegio = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z140SistemaId = "" ;
   this.O140SistemaId = "" ;
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
   this.AV6cSistemaId = "" ;
   this.AV7cProgramaId = 0 ;
   this.AV8cProgramaNome = "" ;
   this.AV9cProgramaTipo = "" ;
   this.AV10cProgramaLink = "" ;
   this.AV11cProgramaAtivo = "" ;
   this.AV12cProgramaPrivilegio = "" ;
   this.AV13pSistemaId = "" ;
   this.AV14pProgramaId = 0 ;
   this.A500ProgramaPrivilegio = "" ;
   this.AV5LinkSelection = "" ;
   this.A140SistemaId = "" ;
   this.A141ProgramaId = 0 ;
   this.A145ProgramaNome = "" ;
   this.A497ProgramaTipo = "" ;
   this.A498ProgramaLink = "" ;
   this.A499ProgramaAtivo = "" ;
   this.Events = {"e131iq2_client": ["ENTER", true] ,"e141iq1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSistemaId',fld:'vCSISTEMAID'},{av:'AV7cProgramaId',fld:'vCPROGRAMAID'},{av:'AV8cProgramaNome',fld:'vCPROGRAMANOME'},{av:'AV9cProgramaTipo',fld:'vCPROGRAMATIPO'},{av:'AV10cProgramaLink',fld:'vCPROGRAMALINK'},{av:'AV11cProgramaAtivo',fld:'vCPROGRAMAATIVO'},{av:'AV12cProgramaPrivilegio',fld:'vCPROGRAMAPRIVILEGIO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A141ProgramaId',fld:'PROGRAMAID'}],[{av:'AV13pSistemaId',fld:'vPSISTEMAID'},{av:'AV14pProgramaId',fld:'vPPROGRAMAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSistemaId',fld:'vCSISTEMAID'},{av:'AV7cProgramaId',fld:'vCPROGRAMAID'},{av:'AV8cProgramaNome',fld:'vCPROGRAMANOME'},{av:'AV9cProgramaTipo',fld:'vCPROGRAMATIPO'},{av:'AV10cProgramaLink',fld:'vCPROGRAMALINK'},{av:'AV11cProgramaAtivo',fld:'vCPROGRAMAATIVO'},{av:'AV12cProgramaPrivilegio',fld:'vCPROGRAMAPRIVILEGIO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSistemaId',fld:'vCSISTEMAID'},{av:'AV7cProgramaId',fld:'vCPROGRAMAID'},{av:'AV8cProgramaNome',fld:'vCPROGRAMANOME'},{av:'AV9cProgramaTipo',fld:'vCPROGRAMATIPO'},{av:'AV10cProgramaLink',fld:'vCPROGRAMALINK'},{av:'AV11cProgramaAtivo',fld:'vCPROGRAMAATIVO'},{av:'AV12cProgramaPrivilegio',fld:'vCPROGRAMAPRIVILEGIO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSistemaId',fld:'vCSISTEMAID'},{av:'AV7cProgramaId',fld:'vCPROGRAMAID'},{av:'AV8cProgramaNome',fld:'vCPROGRAMANOME'},{av:'AV9cProgramaTipo',fld:'vCPROGRAMATIPO'},{av:'AV10cProgramaLink',fld:'vCPROGRAMALINK'},{av:'AV11cProgramaAtivo',fld:'vCPROGRAMAATIVO'},{av:'AV12cProgramaPrivilegio',fld:'vCPROGRAMAPRIVILEGIO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSistemaId',fld:'vCSISTEMAID'},{av:'AV7cProgramaId',fld:'vCPROGRAMAID'},{av:'AV8cProgramaNome',fld:'vCPROGRAMANOME'},{av:'AV9cProgramaTipo',fld:'vCPROGRAMATIPO'},{av:'AV10cProgramaLink',fld:'vCPROGRAMALINK'},{av:'AV11cProgramaAtivo',fld:'vCPROGRAMAATIVO'},{av:'AV12cProgramaPrivilegio',fld:'vCPROGRAMAPRIVILEGIO'}],[]];
   this.setVCMap("AV13pSistemaId", "vPSISTEMAID", 0, "char");
   this.setVCMap("AV14pProgramaId", "vPPROGRAMAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx01h0());
