/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:42:44.51
*/
gx.evt.autoSkip = false;
gx.define('gx0ie0', false, function () {
   this.ServerClass =  "gx0ie0" ;
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
      this.AV11pAparelhoCondicaoEmpresaId=gx.fn.getControlValue("vPAPARELHOCONDICAOEMPRESAID") ;
      this.AV12pAparelhoCondicaoId=gx.fn.getIntegerValue("vPAPARELHOCONDICAOID",'.') ;
   };
   this.e131w42_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141w41_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,50];
   this.GXLastCtrlId =50;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ie0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(8869,43,"APARELHOCONDICAOEMPRESAID","Empresa","","AparelhoCondicaoEmpresaId","char",0,"px",10,10,"left",null,[],8869,"AparelhoCondicaoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8870,44,"APARELHOCONDICAOID","Código da Condição","","AparelhoCondicaoId","int",0,"px",4,4,"right",null,[],8870,"AparelhoCondicaoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8866,45,"APARELHOCONDICAODESCRICAO","Descrição","Selecionar","AparelhoCondicaoDescricao","svchar",0,"px",60,60,"left",null,[],8866,"AparelhoCondicaoDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8867,46,"APARELHOCONDICAOUSUALT","Usuário Alteração","","AparelhoCondicaoUsuAlt","char",0,"px",12,12,"left",null,[],8867,"AparelhoCondicaoUsuAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8868,47,"APARELHOCONDICAODATAUSUALT","Data Alteração","","AparelhoCondicaoDataUsuAlt","dtime",0,"px",16,16,"right",null,[],8868,"AparelhoCondicaoDataUsuAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKAPARELHOCONDICAOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPARELHOCONDICAOEMPRESAID",gxz:"ZV6cAparelhoCondicaoEmpresaId",gxold:"OV6cAparelhoCondicaoEmpresaId",gxvar:"AV6cAparelhoCondicaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cAparelhoCondicaoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cAparelhoCondicaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCAPARELHOCONDICAOEMPRESAID",gx.O.AV6cAparelhoCondicaoEmpresaId,0)},c2v:function(){gx.O.AV6cAparelhoCondicaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCAPARELHOCONDICAOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKAPARELHOCONDICAOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPARELHOCONDICAOID",gxz:"ZV7cAparelhoCondicaoId",gxold:"OV7cAparelhoCondicaoId",gxvar:"AV7cAparelhoCondicaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cAparelhoCondicaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cAparelhoCondicaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAPARELHOCONDICAOID",gx.O.AV7cAparelhoCondicaoId,0)},c2v:function(){gx.O.AV7cAparelhoCondicaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAPARELHOCONDICAOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKAPARELHOCONDICAODESCRICAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPARELHOCONDICAODESCRICAO",gxz:"ZV8cAparelhoCondicaoDescricao",gxold:"OV8cAparelhoCondicaoDescricao",gxvar:"AV8cAparelhoCondicaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cAparelhoCondicaoDescricao=Value},v2z:function(Value){gx.O.ZV8cAparelhoCondicaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCAPARELHOCONDICAODESCRICAO",gx.O.AV8cAparelhoCondicaoDescricao,0)},c2v:function(){gx.O.AV8cAparelhoCondicaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCAPARELHOCONDICAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKAPARELHOCONDICAOUSUALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPARELHOCONDICAOUSUALT",gxz:"ZV9cAparelhoCondicaoUsuAlt",gxold:"OV9cAparelhoCondicaoUsuAlt",gxvar:"AV9cAparelhoCondicaoUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cAparelhoCondicaoUsuAlt=Value},v2z:function(Value){gx.O.ZV9cAparelhoCondicaoUsuAlt=Value},v2c:function(){gx.fn.setControlValue("vCAPARELHOCONDICAOUSUALT",gx.O.AV9cAparelhoCondicaoUsuAlt,0)},c2v:function(){gx.O.AV9cAparelhoCondicaoUsuAlt=this.val()},val:function(){return gx.fn.getControlValue("vCAPARELHOCONDICAOUSUALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKAPARELHOCONDICAODATAUSUALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPARELHOCONDICAODATAUSUALT",gxz:"ZV10cAparelhoCondicaoDataUsuAlt",gxold:"OV10cAparelhoCondicaoDataUsuAlt",gxvar:"AV10cAparelhoCondicaoDataUsuAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cAparelhoCondicaoDataUsuAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cAparelhoCondicaoDataUsuAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCAPARELHOCONDICAODATAUSUALT",gx.O.AV10cAparelhoCondicaoDataUsuAlt,0)},c2v:function(){gx.O.AV10cAparelhoCondicaoDataUsuAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCAPARELHOCONDICAODATAUSUALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV15Linkselection_GXI)},c2v:function(){gx.O.AV15Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV15Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCONDICAOEMPRESAID",gxz:"Z8869AparelhoCondicaoEmpresaId",gxold:"O8869AparelhoCondicaoEmpresaId",gxvar:"A8869AparelhoCondicaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8869AparelhoCondicaoEmpresaId=Value},v2z:function(Value){gx.O.Z8869AparelhoCondicaoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("APARELHOCONDICAOEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A8869AparelhoCondicaoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8869AparelhoCondicaoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("APARELHOCONDICAOEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCONDICAOID",gxz:"Z8870AparelhoCondicaoId",gxold:"O8870AparelhoCondicaoId",gxvar:"A8870AparelhoCondicaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8870AparelhoCondicaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8870AparelhoCondicaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("APARELHOCONDICAOID",row || gx.fn.currentGridRowImpl(41),gx.O.A8870AparelhoCondicaoId,0)},c2v:function(){gx.O.A8870AparelhoCondicaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("APARELHOCONDICAOID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCONDICAODESCRICAO",gxz:"Z8866AparelhoCondicaoDescricao",gxold:"O8866AparelhoCondicaoDescricao",gxvar:"A8866AparelhoCondicaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8866AparelhoCondicaoDescricao=Value},v2z:function(Value){gx.O.Z8866AparelhoCondicaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("APARELHOCONDICAODESCRICAO",row || gx.fn.currentGridRowImpl(41),gx.O.A8866AparelhoCondicaoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8866AparelhoCondicaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("APARELHOCONDICAODESCRICAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCONDICAOUSUALT",gxz:"Z8867AparelhoCondicaoUsuAlt",gxold:"O8867AparelhoCondicaoUsuAlt",gxvar:"A8867AparelhoCondicaoUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8867AparelhoCondicaoUsuAlt=Value},v2z:function(Value){gx.O.Z8867AparelhoCondicaoUsuAlt=Value},v2c:function(row){gx.fn.setGridControlValue("APARELHOCONDICAOUSUALT",row || gx.fn.currentGridRowImpl(41),gx.O.A8867AparelhoCondicaoUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8867AparelhoCondicaoUsuAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("APARELHOCONDICAOUSUALT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCONDICAODATAUSUALT",gxz:"Z8868AparelhoCondicaoDataUsuAlt",gxold:"O8868AparelhoCondicaoDataUsuAlt",gxvar:"A8868AparelhoCondicaoDataUsuAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8868AparelhoCondicaoDataUsuAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8868AparelhoCondicaoDataUsuAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("APARELHOCONDICAODATAUSUALT",row || gx.fn.currentGridRowImpl(41),gx.O.A8868AparelhoCondicaoDataUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8868AparelhoCondicaoDataUsuAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("APARELHOCONDICAODATAUSUALT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TABLE4",grid:0};
   this.AV6cAparelhoCondicaoEmpresaId = "" ;
   this.ZV6cAparelhoCondicaoEmpresaId = "" ;
   this.OV6cAparelhoCondicaoEmpresaId = "" ;
   this.AV7cAparelhoCondicaoId = 0 ;
   this.ZV7cAparelhoCondicaoId = 0 ;
   this.OV7cAparelhoCondicaoId = 0 ;
   this.AV8cAparelhoCondicaoDescricao = "" ;
   this.ZV8cAparelhoCondicaoDescricao = "" ;
   this.OV8cAparelhoCondicaoDescricao = "" ;
   this.AV9cAparelhoCondicaoUsuAlt = "" ;
   this.ZV9cAparelhoCondicaoUsuAlt = "" ;
   this.OV9cAparelhoCondicaoUsuAlt = "" ;
   this.AV10cAparelhoCondicaoDataUsuAlt = gx.date.nullDate() ;
   this.ZV10cAparelhoCondicaoDataUsuAlt = gx.date.nullDate() ;
   this.OV10cAparelhoCondicaoDataUsuAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z8869AparelhoCondicaoEmpresaId = "" ;
   this.O8869AparelhoCondicaoEmpresaId = "" ;
   this.Z8870AparelhoCondicaoId = 0 ;
   this.O8870AparelhoCondicaoId = 0 ;
   this.Z8866AparelhoCondicaoDescricao = "" ;
   this.O8866AparelhoCondicaoDescricao = "" ;
   this.Z8867AparelhoCondicaoUsuAlt = "" ;
   this.O8867AparelhoCondicaoUsuAlt = "" ;
   this.Z8868AparelhoCondicaoDataUsuAlt = gx.date.nullDate() ;
   this.O8868AparelhoCondicaoDataUsuAlt = gx.date.nullDate() ;
   this.AV6cAparelhoCondicaoEmpresaId = "" ;
   this.AV7cAparelhoCondicaoId = 0 ;
   this.AV8cAparelhoCondicaoDescricao = "" ;
   this.AV9cAparelhoCondicaoUsuAlt = "" ;
   this.AV10cAparelhoCondicaoDataUsuAlt = gx.date.nullDate() ;
   this.AV11pAparelhoCondicaoEmpresaId = "" ;
   this.AV12pAparelhoCondicaoId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A8869AparelhoCondicaoEmpresaId = "" ;
   this.A8870AparelhoCondicaoId = 0 ;
   this.A8866AparelhoCondicaoDescricao = "" ;
   this.A8867AparelhoCondicaoUsuAlt = "" ;
   this.A8868AparelhoCondicaoDataUsuAlt = gx.date.nullDate() ;
   this.Events = {"e131w42_client": ["ENTER", true] ,"e141w41_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAparelhoCondicaoEmpresaId',fld:'vCAPARELHOCONDICAOEMPRESAID'},{av:'AV7cAparelhoCondicaoId',fld:'vCAPARELHOCONDICAOID'},{av:'AV8cAparelhoCondicaoDescricao',fld:'vCAPARELHOCONDICAODESCRICAO'},{av:'AV9cAparelhoCondicaoUsuAlt',fld:'vCAPARELHOCONDICAOUSUALT'},{av:'AV10cAparelhoCondicaoDataUsuAlt',fld:'vCAPARELHOCONDICAODATAUSUALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A8869AparelhoCondicaoEmpresaId',fld:'APARELHOCONDICAOEMPRESAID'},{av:'A8870AparelhoCondicaoId',fld:'APARELHOCONDICAOID'}],[{av:'AV11pAparelhoCondicaoEmpresaId',fld:'vPAPARELHOCONDICAOEMPRESAID'},{av:'AV12pAparelhoCondicaoId',fld:'vPAPARELHOCONDICAOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAparelhoCondicaoEmpresaId',fld:'vCAPARELHOCONDICAOEMPRESAID'},{av:'AV7cAparelhoCondicaoId',fld:'vCAPARELHOCONDICAOID'},{av:'AV8cAparelhoCondicaoDescricao',fld:'vCAPARELHOCONDICAODESCRICAO'},{av:'AV9cAparelhoCondicaoUsuAlt',fld:'vCAPARELHOCONDICAOUSUALT'},{av:'AV10cAparelhoCondicaoDataUsuAlt',fld:'vCAPARELHOCONDICAODATAUSUALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAparelhoCondicaoEmpresaId',fld:'vCAPARELHOCONDICAOEMPRESAID'},{av:'AV7cAparelhoCondicaoId',fld:'vCAPARELHOCONDICAOID'},{av:'AV8cAparelhoCondicaoDescricao',fld:'vCAPARELHOCONDICAODESCRICAO'},{av:'AV9cAparelhoCondicaoUsuAlt',fld:'vCAPARELHOCONDICAOUSUALT'},{av:'AV10cAparelhoCondicaoDataUsuAlt',fld:'vCAPARELHOCONDICAODATAUSUALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAparelhoCondicaoEmpresaId',fld:'vCAPARELHOCONDICAOEMPRESAID'},{av:'AV7cAparelhoCondicaoId',fld:'vCAPARELHOCONDICAOID'},{av:'AV8cAparelhoCondicaoDescricao',fld:'vCAPARELHOCONDICAODESCRICAO'},{av:'AV9cAparelhoCondicaoUsuAlt',fld:'vCAPARELHOCONDICAOUSUALT'},{av:'AV10cAparelhoCondicaoDataUsuAlt',fld:'vCAPARELHOCONDICAODATAUSUALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAparelhoCondicaoEmpresaId',fld:'vCAPARELHOCONDICAOEMPRESAID'},{av:'AV7cAparelhoCondicaoId',fld:'vCAPARELHOCONDICAOID'},{av:'AV8cAparelhoCondicaoDescricao',fld:'vCAPARELHOCONDICAODESCRICAO'},{av:'AV9cAparelhoCondicaoUsuAlt',fld:'vCAPARELHOCONDICAOUSUALT'},{av:'AV10cAparelhoCondicaoDataUsuAlt',fld:'vCAPARELHOCONDICAODATAUSUALT'}],[]];
   this.setVCMap("AV11pAparelhoCondicaoEmpresaId", "vPAPARELHOCONDICAOEMPRESAID", 0, "char");
   this.setVCMap("AV12pAparelhoCondicaoId", "vPAPARELHOCONDICAOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0ie0());
