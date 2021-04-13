/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:42:23.60
*/
gx.evt.autoSkip = false;
gx.define('gx0ia0', false, function () {
   this.ServerClass =  "gx0ia0" ;
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
      this.AV12pAparelhoEmpresaId=gx.fn.getControlValue("vPAPARELHOEMPRESAID") ;
      this.AV13pAparelhoId=gx.fn.getIntegerValue("vPAPARELHOID",'.') ;
   };
   this.e131vu2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141vu1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,60];
   this.GXLastCtrlId =60;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ia0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(8824,53,"APARELHOEMPRESAID","Código Empresa do Aparelho","","AparelhoEmpresaId","char",0,"px",10,10,"left",null,[],8824,"AparelhoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8825,54,"APARELHOID","Cod. Aparelho","","AparelhoId","int",0,"px",4,4,"right",null,[],8825,"AparelhoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8821,55,"APARELHODESCRICAO","Descrição","Selecionar","AparelhoDescricao","svchar",0,"px",40,40,"left",null,[],8821,"AparelhoDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8822,56,"APARELHOUSUALT","Usuário Alteração","","AparelhoUsuAlt","char",0,"px",12,12,"left",null,[],8822,"AparelhoUsuAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8823,57,"APARELHODTUSUALT","Data Alteração","","AparelhoDtUsuAlt","dtime",0,"px",16,16,"right",null,[],8823,"AparelhoDtUsuAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKAPARELHOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPARELHOEMPRESAID",gxz:"ZV6cAparelhoEmpresaId",gxold:"OV6cAparelhoEmpresaId",gxvar:"AV6cAparelhoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cAparelhoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cAparelhoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCAPARELHOEMPRESAID",gx.O.AV6cAparelhoEmpresaId,0)},c2v:function(){gx.O.AV6cAparelhoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCAPARELHOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKAPARELHOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPARELHOID",gxz:"ZV7cAparelhoId",gxold:"OV7cAparelhoId",gxvar:"AV7cAparelhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cAparelhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cAparelhoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAPARELHOID",gx.O.AV7cAparelhoId,0)},c2v:function(){gx.O.AV7cAparelhoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAPARELHOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKAPARELHODESCRICAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPARELHODESCRICAO",gxz:"ZV8cAparelhoDescricao",gxold:"OV8cAparelhoDescricao",gxvar:"AV8cAparelhoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cAparelhoDescricao=Value},v2z:function(Value){gx.O.ZV8cAparelhoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCAPARELHODESCRICAO",gx.O.AV8cAparelhoDescricao,0)},c2v:function(){gx.O.AV8cAparelhoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCAPARELHODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKAPARELHOUSUALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPARELHOUSUALT",gxz:"ZV9cAparelhoUsuAlt",gxold:"OV9cAparelhoUsuAlt",gxvar:"AV9cAparelhoUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cAparelhoUsuAlt=Value},v2z:function(Value){gx.O.ZV9cAparelhoUsuAlt=Value},v2c:function(){gx.fn.setControlValue("vCAPARELHOUSUALT",gx.O.AV9cAparelhoUsuAlt,0)},c2v:function(){gx.O.AV9cAparelhoUsuAlt=this.val()},val:function(){return gx.fn.getControlValue("vCAPARELHOUSUALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKAPARELHODTUSUALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPARELHODTUSUALT",gxz:"ZV10cAparelhoDtUsuAlt",gxold:"OV10cAparelhoDtUsuAlt",gxvar:"AV10cAparelhoDtUsuAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cAparelhoDtUsuAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cAparelhoDtUsuAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCAPARELHODTUSUALT",gx.O.AV10cAparelhoDtUsuAlt,0)},c2v:function(){gx.O.AV10cAparelhoDtUsuAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCAPARELHODTUSUALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKAPARELHOSITUACAO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPARELHOSITUACAO",gxz:"ZV11cAparelhoSituacao",gxold:"OV11cAparelhoSituacao",gxvar:"AV11cAparelhoSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cAparelhoSituacao=Value},v2z:function(Value){gx.O.ZV11cAparelhoSituacao=Value},v2c:function(){gx.fn.setControlValue("vCAPARELHOSITUACAO",gx.O.AV11cAparelhoSituacao,0)},c2v:function(){gx.O.AV11cAparelhoSituacao=this.val()},val:function(){return gx.fn.getControlValue("vCAPARELHOSITUACAO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKAPARELHOPRAZOMANUTENCAO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPARELHOPRAZOMANUTENCAO",gxz:"ZV14cAparelhoPrazoManutencao",gxold:"OV14cAparelhoPrazoManutencao",gxvar:"AV14cAparelhoPrazoManutencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14cAparelhoPrazoManutencao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14cAparelhoPrazoManutencao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAPARELHOPRAZOMANUTENCAO",gx.O.AV14cAparelhoPrazoManutencao,0)},c2v:function(){gx.O.AV14cAparelhoPrazoManutencao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAPARELHOPRAZOMANUTENCAO",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOEMPRESAID",gxz:"Z8824AparelhoEmpresaId",gxold:"O8824AparelhoEmpresaId",gxvar:"A8824AparelhoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8824AparelhoEmpresaId=Value},v2z:function(Value){gx.O.Z8824AparelhoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("APARELHOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A8824AparelhoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8824AparelhoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("APARELHOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOID",gxz:"Z8825AparelhoId",gxold:"O8825AparelhoId",gxvar:"A8825AparelhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8825AparelhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8825AparelhoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("APARELHOID",row || gx.fn.currentGridRowImpl(51),gx.O.A8825AparelhoId,0)},c2v:function(){gx.O.A8825AparelhoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("APARELHOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APARELHODESCRICAO",gxz:"Z8821AparelhoDescricao",gxold:"O8821AparelhoDescricao",gxvar:"A8821AparelhoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8821AparelhoDescricao=Value},v2z:function(Value){gx.O.Z8821AparelhoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("APARELHODESCRICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A8821AparelhoDescricao,0)},c2v:function(){gx.O.A8821AparelhoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("APARELHODESCRICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOUSUALT",gxz:"Z8822AparelhoUsuAlt",gxold:"O8822AparelhoUsuAlt",gxvar:"A8822AparelhoUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8822AparelhoUsuAlt=Value},v2z:function(Value){gx.O.Z8822AparelhoUsuAlt=Value},v2c:function(row){gx.fn.setGridControlValue("APARELHOUSUALT",row || gx.fn.currentGridRowImpl(51),gx.O.A8822AparelhoUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8822AparelhoUsuAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("APARELHOUSUALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APARELHODTUSUALT",gxz:"Z8823AparelhoDtUsuAlt",gxold:"O8823AparelhoDtUsuAlt",gxvar:"A8823AparelhoDtUsuAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8823AparelhoDtUsuAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8823AparelhoDtUsuAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("APARELHODTUSUALT",row || gx.fn.currentGridRowImpl(51),gx.O.A8823AparelhoDtUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8823AparelhoDtUsuAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("APARELHODTUSUALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TABLE4",grid:0};
   this.AV6cAparelhoEmpresaId = "" ;
   this.ZV6cAparelhoEmpresaId = "" ;
   this.OV6cAparelhoEmpresaId = "" ;
   this.AV7cAparelhoId = 0 ;
   this.ZV7cAparelhoId = 0 ;
   this.OV7cAparelhoId = 0 ;
   this.AV8cAparelhoDescricao = "" ;
   this.ZV8cAparelhoDescricao = "" ;
   this.OV8cAparelhoDescricao = "" ;
   this.AV9cAparelhoUsuAlt = "" ;
   this.ZV9cAparelhoUsuAlt = "" ;
   this.OV9cAparelhoUsuAlt = "" ;
   this.AV10cAparelhoDtUsuAlt = gx.date.nullDate() ;
   this.ZV10cAparelhoDtUsuAlt = gx.date.nullDate() ;
   this.OV10cAparelhoDtUsuAlt = gx.date.nullDate() ;
   this.AV11cAparelhoSituacao = "" ;
   this.ZV11cAparelhoSituacao = "" ;
   this.OV11cAparelhoSituacao = "" ;
   this.AV14cAparelhoPrazoManutencao = 0 ;
   this.ZV14cAparelhoPrazoManutencao = 0 ;
   this.OV14cAparelhoPrazoManutencao = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z8824AparelhoEmpresaId = "" ;
   this.O8824AparelhoEmpresaId = "" ;
   this.Z8825AparelhoId = 0 ;
   this.O8825AparelhoId = 0 ;
   this.Z8821AparelhoDescricao = "" ;
   this.O8821AparelhoDescricao = "" ;
   this.Z8822AparelhoUsuAlt = "" ;
   this.O8822AparelhoUsuAlt = "" ;
   this.Z8823AparelhoDtUsuAlt = gx.date.nullDate() ;
   this.O8823AparelhoDtUsuAlt = gx.date.nullDate() ;
   this.AV6cAparelhoEmpresaId = "" ;
   this.AV7cAparelhoId = 0 ;
   this.AV8cAparelhoDescricao = "" ;
   this.AV9cAparelhoUsuAlt = "" ;
   this.AV10cAparelhoDtUsuAlt = gx.date.nullDate() ;
   this.AV11cAparelhoSituacao = "" ;
   this.AV14cAparelhoPrazoManutencao = 0 ;
   this.AV12pAparelhoEmpresaId = "" ;
   this.AV13pAparelhoId = 0 ;
   this.A9700AparelhoPrazoManutencao = 0 ;
   this.A9244AparelhoSituacao = "" ;
   this.AV5LinkSelection = "" ;
   this.A8824AparelhoEmpresaId = "" ;
   this.A8825AparelhoId = 0 ;
   this.A8821AparelhoDescricao = "" ;
   this.A8822AparelhoUsuAlt = "" ;
   this.A8823AparelhoDtUsuAlt = gx.date.nullDate() ;
   this.Events = {"e131vu2_client": ["ENTER", true] ,"e141vu1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAparelhoEmpresaId',fld:'vCAPARELHOEMPRESAID'},{av:'AV7cAparelhoId',fld:'vCAPARELHOID'},{av:'AV8cAparelhoDescricao',fld:'vCAPARELHODESCRICAO'},{av:'AV9cAparelhoUsuAlt',fld:'vCAPARELHOUSUALT'},{av:'AV10cAparelhoDtUsuAlt',fld:'vCAPARELHODTUSUALT'},{av:'AV11cAparelhoSituacao',fld:'vCAPARELHOSITUACAO'},{av:'AV14cAparelhoPrazoManutencao',fld:'vCAPARELHOPRAZOMANUTENCAO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'A8825AparelhoId',fld:'APARELHOID'}],[{av:'AV12pAparelhoEmpresaId',fld:'vPAPARELHOEMPRESAID'},{av:'AV13pAparelhoId',fld:'vPAPARELHOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAparelhoEmpresaId',fld:'vCAPARELHOEMPRESAID'},{av:'AV7cAparelhoId',fld:'vCAPARELHOID'},{av:'AV8cAparelhoDescricao',fld:'vCAPARELHODESCRICAO'},{av:'AV9cAparelhoUsuAlt',fld:'vCAPARELHOUSUALT'},{av:'AV10cAparelhoDtUsuAlt',fld:'vCAPARELHODTUSUALT'},{av:'AV11cAparelhoSituacao',fld:'vCAPARELHOSITUACAO'},{av:'AV14cAparelhoPrazoManutencao',fld:'vCAPARELHOPRAZOMANUTENCAO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAparelhoEmpresaId',fld:'vCAPARELHOEMPRESAID'},{av:'AV7cAparelhoId',fld:'vCAPARELHOID'},{av:'AV8cAparelhoDescricao',fld:'vCAPARELHODESCRICAO'},{av:'AV9cAparelhoUsuAlt',fld:'vCAPARELHOUSUALT'},{av:'AV10cAparelhoDtUsuAlt',fld:'vCAPARELHODTUSUALT'},{av:'AV11cAparelhoSituacao',fld:'vCAPARELHOSITUACAO'},{av:'AV14cAparelhoPrazoManutencao',fld:'vCAPARELHOPRAZOMANUTENCAO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAparelhoEmpresaId',fld:'vCAPARELHOEMPRESAID'},{av:'AV7cAparelhoId',fld:'vCAPARELHOID'},{av:'AV8cAparelhoDescricao',fld:'vCAPARELHODESCRICAO'},{av:'AV9cAparelhoUsuAlt',fld:'vCAPARELHOUSUALT'},{av:'AV10cAparelhoDtUsuAlt',fld:'vCAPARELHODTUSUALT'},{av:'AV11cAparelhoSituacao',fld:'vCAPARELHOSITUACAO'},{av:'AV14cAparelhoPrazoManutencao',fld:'vCAPARELHOPRAZOMANUTENCAO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAparelhoEmpresaId',fld:'vCAPARELHOEMPRESAID'},{av:'AV7cAparelhoId',fld:'vCAPARELHOID'},{av:'AV8cAparelhoDescricao',fld:'vCAPARELHODESCRICAO'},{av:'AV9cAparelhoUsuAlt',fld:'vCAPARELHOUSUALT'},{av:'AV10cAparelhoDtUsuAlt',fld:'vCAPARELHODTUSUALT'},{av:'AV11cAparelhoSituacao',fld:'vCAPARELHOSITUACAO'},{av:'AV14cAparelhoPrazoManutencao',fld:'vCAPARELHOPRAZOMANUTENCAO'}],[]];
   this.setVCMap("AV12pAparelhoEmpresaId", "vPAPARELHOEMPRESAID", 0, "char");
   this.setVCMap("AV13pAparelhoId", "vPAPARELHOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0ia0());
