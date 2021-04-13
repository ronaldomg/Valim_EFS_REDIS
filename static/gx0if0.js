/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:42:46.46
*/
gx.evt.autoSkip = false;
gx.define('gx0if0', false, function () {
   this.ServerClass =  "gx0if0" ;
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
      this.AV11pAparelhoDefeitoEmpresaId=gx.fn.getControlValue("vPAPARELHODEFEITOEMPRESAID") ;
      this.AV12pAparelhoDefeitoId=gx.fn.getIntegerValue("vPAPARELHODEFEITOID",'.') ;
   };
   this.e131w52_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141w51_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,50];
   this.GXLastCtrlId =50;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0if0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(8874,43,"APARELHODEFEITOEMPRESAID","Empresa","","AparelhoDefeitoEmpresaId","char",0,"px",10,10,"left",null,[],8874,"AparelhoDefeitoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8875,44,"APARELHODEFEITOID","Código do Defeito","","AparelhoDefeitoId","int",0,"px",4,4,"right",null,[],8875,"AparelhoDefeitoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8871,45,"APARELHODEFEITODESCRICAO","Descrição","Selecionar","AparelhoDefeitoDescricao","svchar",0,"px",60,60,"left",null,[],8871,"AparelhoDefeitoDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8872,46,"APARELHODEFEITOUSUALT","Usuário Alteração","","AparelhoDefeitoUsuAlt","char",0,"px",12,12,"left",null,[],8872,"AparelhoDefeitoUsuAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8873,47,"APARELHODEFEITODATAUSUALT","Data Alteração","","AparelhoDefeitoDataUsuAlt","dtime",0,"px",16,16,"right",null,[],8873,"AparelhoDefeitoDataUsuAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKAPARELHODEFEITOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPARELHODEFEITOEMPRESAID",gxz:"ZV6cAparelhoDefeitoEmpresaId",gxold:"OV6cAparelhoDefeitoEmpresaId",gxvar:"AV6cAparelhoDefeitoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cAparelhoDefeitoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cAparelhoDefeitoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCAPARELHODEFEITOEMPRESAID",gx.O.AV6cAparelhoDefeitoEmpresaId,0)},c2v:function(){gx.O.AV6cAparelhoDefeitoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCAPARELHODEFEITOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKAPARELHODEFEITOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPARELHODEFEITOID",gxz:"ZV7cAparelhoDefeitoId",gxold:"OV7cAparelhoDefeitoId",gxvar:"AV7cAparelhoDefeitoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cAparelhoDefeitoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cAparelhoDefeitoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAPARELHODEFEITOID",gx.O.AV7cAparelhoDefeitoId,0)},c2v:function(){gx.O.AV7cAparelhoDefeitoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAPARELHODEFEITOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKAPARELHODEFEITODESCRICAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPARELHODEFEITODESCRICAO",gxz:"ZV8cAparelhoDefeitoDescricao",gxold:"OV8cAparelhoDefeitoDescricao",gxvar:"AV8cAparelhoDefeitoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cAparelhoDefeitoDescricao=Value},v2z:function(Value){gx.O.ZV8cAparelhoDefeitoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCAPARELHODEFEITODESCRICAO",gx.O.AV8cAparelhoDefeitoDescricao,0)},c2v:function(){gx.O.AV8cAparelhoDefeitoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCAPARELHODEFEITODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKAPARELHODEFEITOUSUALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPARELHODEFEITOUSUALT",gxz:"ZV9cAparelhoDefeitoUsuAlt",gxold:"OV9cAparelhoDefeitoUsuAlt",gxvar:"AV9cAparelhoDefeitoUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cAparelhoDefeitoUsuAlt=Value},v2z:function(Value){gx.O.ZV9cAparelhoDefeitoUsuAlt=Value},v2c:function(){gx.fn.setControlValue("vCAPARELHODEFEITOUSUALT",gx.O.AV9cAparelhoDefeitoUsuAlt,0)},c2v:function(){gx.O.AV9cAparelhoDefeitoUsuAlt=this.val()},val:function(){return gx.fn.getControlValue("vCAPARELHODEFEITOUSUALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKAPARELHODEFEITODATAUSUALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPARELHODEFEITODATAUSUALT",gxz:"ZV10cAparelhoDefeitoDataUsuAlt",gxold:"OV10cAparelhoDefeitoDataUsuAlt",gxvar:"AV10cAparelhoDefeitoDataUsuAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cAparelhoDefeitoDataUsuAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cAparelhoDefeitoDataUsuAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCAPARELHODEFEITODATAUSUALT",gx.O.AV10cAparelhoDefeitoDataUsuAlt,0)},c2v:function(){gx.O.AV10cAparelhoDefeitoDataUsuAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCAPARELHODEFEITODATAUSUALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV15Linkselection_GXI)},c2v:function(){gx.O.AV15Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV15Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APARELHODEFEITOEMPRESAID",gxz:"Z8874AparelhoDefeitoEmpresaId",gxold:"O8874AparelhoDefeitoEmpresaId",gxvar:"A8874AparelhoDefeitoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8874AparelhoDefeitoEmpresaId=Value},v2z:function(Value){gx.O.Z8874AparelhoDefeitoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("APARELHODEFEITOEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A8874AparelhoDefeitoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8874AparelhoDefeitoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("APARELHODEFEITOEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APARELHODEFEITOID",gxz:"Z8875AparelhoDefeitoId",gxold:"O8875AparelhoDefeitoId",gxvar:"A8875AparelhoDefeitoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8875AparelhoDefeitoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8875AparelhoDefeitoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("APARELHODEFEITOID",row || gx.fn.currentGridRowImpl(41),gx.O.A8875AparelhoDefeitoId,0)},c2v:function(){gx.O.A8875AparelhoDefeitoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("APARELHODEFEITOID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APARELHODEFEITODESCRICAO",gxz:"Z8871AparelhoDefeitoDescricao",gxold:"O8871AparelhoDefeitoDescricao",gxvar:"A8871AparelhoDefeitoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8871AparelhoDefeitoDescricao=Value},v2z:function(Value){gx.O.Z8871AparelhoDefeitoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("APARELHODEFEITODESCRICAO",row || gx.fn.currentGridRowImpl(41),gx.O.A8871AparelhoDefeitoDescricao,0)},c2v:function(){gx.O.A8871AparelhoDefeitoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("APARELHODEFEITODESCRICAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APARELHODEFEITOUSUALT",gxz:"Z8872AparelhoDefeitoUsuAlt",gxold:"O8872AparelhoDefeitoUsuAlt",gxvar:"A8872AparelhoDefeitoUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8872AparelhoDefeitoUsuAlt=Value},v2z:function(Value){gx.O.Z8872AparelhoDefeitoUsuAlt=Value},v2c:function(row){gx.fn.setGridControlValue("APARELHODEFEITOUSUALT",row || gx.fn.currentGridRowImpl(41),gx.O.A8872AparelhoDefeitoUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8872AparelhoDefeitoUsuAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("APARELHODEFEITOUSUALT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APARELHODEFEITODATAUSUALT",gxz:"Z8873AparelhoDefeitoDataUsuAlt",gxold:"O8873AparelhoDefeitoDataUsuAlt",gxvar:"A8873AparelhoDefeitoDataUsuAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8873AparelhoDefeitoDataUsuAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8873AparelhoDefeitoDataUsuAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("APARELHODEFEITODATAUSUALT",row || gx.fn.currentGridRowImpl(41),gx.O.A8873AparelhoDefeitoDataUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8873AparelhoDefeitoDataUsuAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("APARELHODEFEITODATAUSUALT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TABLE4",grid:0};
   this.AV6cAparelhoDefeitoEmpresaId = "" ;
   this.ZV6cAparelhoDefeitoEmpresaId = "" ;
   this.OV6cAparelhoDefeitoEmpresaId = "" ;
   this.AV7cAparelhoDefeitoId = 0 ;
   this.ZV7cAparelhoDefeitoId = 0 ;
   this.OV7cAparelhoDefeitoId = 0 ;
   this.AV8cAparelhoDefeitoDescricao = "" ;
   this.ZV8cAparelhoDefeitoDescricao = "" ;
   this.OV8cAparelhoDefeitoDescricao = "" ;
   this.AV9cAparelhoDefeitoUsuAlt = "" ;
   this.ZV9cAparelhoDefeitoUsuAlt = "" ;
   this.OV9cAparelhoDefeitoUsuAlt = "" ;
   this.AV10cAparelhoDefeitoDataUsuAlt = gx.date.nullDate() ;
   this.ZV10cAparelhoDefeitoDataUsuAlt = gx.date.nullDate() ;
   this.OV10cAparelhoDefeitoDataUsuAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z8874AparelhoDefeitoEmpresaId = "" ;
   this.O8874AparelhoDefeitoEmpresaId = "" ;
   this.Z8875AparelhoDefeitoId = 0 ;
   this.O8875AparelhoDefeitoId = 0 ;
   this.Z8871AparelhoDefeitoDescricao = "" ;
   this.O8871AparelhoDefeitoDescricao = "" ;
   this.Z8872AparelhoDefeitoUsuAlt = "" ;
   this.O8872AparelhoDefeitoUsuAlt = "" ;
   this.Z8873AparelhoDefeitoDataUsuAlt = gx.date.nullDate() ;
   this.O8873AparelhoDefeitoDataUsuAlt = gx.date.nullDate() ;
   this.AV6cAparelhoDefeitoEmpresaId = "" ;
   this.AV7cAparelhoDefeitoId = 0 ;
   this.AV8cAparelhoDefeitoDescricao = "" ;
   this.AV9cAparelhoDefeitoUsuAlt = "" ;
   this.AV10cAparelhoDefeitoDataUsuAlt = gx.date.nullDate() ;
   this.AV11pAparelhoDefeitoEmpresaId = "" ;
   this.AV12pAparelhoDefeitoId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A8874AparelhoDefeitoEmpresaId = "" ;
   this.A8875AparelhoDefeitoId = 0 ;
   this.A8871AparelhoDefeitoDescricao = "" ;
   this.A8872AparelhoDefeitoUsuAlt = "" ;
   this.A8873AparelhoDefeitoDataUsuAlt = gx.date.nullDate() ;
   this.Events = {"e131w52_client": ["ENTER", true] ,"e141w51_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAparelhoDefeitoEmpresaId',fld:'vCAPARELHODEFEITOEMPRESAID'},{av:'AV7cAparelhoDefeitoId',fld:'vCAPARELHODEFEITOID'},{av:'AV8cAparelhoDefeitoDescricao',fld:'vCAPARELHODEFEITODESCRICAO'},{av:'AV9cAparelhoDefeitoUsuAlt',fld:'vCAPARELHODEFEITOUSUALT'},{av:'AV10cAparelhoDefeitoDataUsuAlt',fld:'vCAPARELHODEFEITODATAUSUALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A8874AparelhoDefeitoEmpresaId',fld:'APARELHODEFEITOEMPRESAID'},{av:'A8875AparelhoDefeitoId',fld:'APARELHODEFEITOID'}],[{av:'AV11pAparelhoDefeitoEmpresaId',fld:'vPAPARELHODEFEITOEMPRESAID'},{av:'AV12pAparelhoDefeitoId',fld:'vPAPARELHODEFEITOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAparelhoDefeitoEmpresaId',fld:'vCAPARELHODEFEITOEMPRESAID'},{av:'AV7cAparelhoDefeitoId',fld:'vCAPARELHODEFEITOID'},{av:'AV8cAparelhoDefeitoDescricao',fld:'vCAPARELHODEFEITODESCRICAO'},{av:'AV9cAparelhoDefeitoUsuAlt',fld:'vCAPARELHODEFEITOUSUALT'},{av:'AV10cAparelhoDefeitoDataUsuAlt',fld:'vCAPARELHODEFEITODATAUSUALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAparelhoDefeitoEmpresaId',fld:'vCAPARELHODEFEITOEMPRESAID'},{av:'AV7cAparelhoDefeitoId',fld:'vCAPARELHODEFEITOID'},{av:'AV8cAparelhoDefeitoDescricao',fld:'vCAPARELHODEFEITODESCRICAO'},{av:'AV9cAparelhoDefeitoUsuAlt',fld:'vCAPARELHODEFEITOUSUALT'},{av:'AV10cAparelhoDefeitoDataUsuAlt',fld:'vCAPARELHODEFEITODATAUSUALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAparelhoDefeitoEmpresaId',fld:'vCAPARELHODEFEITOEMPRESAID'},{av:'AV7cAparelhoDefeitoId',fld:'vCAPARELHODEFEITOID'},{av:'AV8cAparelhoDefeitoDescricao',fld:'vCAPARELHODEFEITODESCRICAO'},{av:'AV9cAparelhoDefeitoUsuAlt',fld:'vCAPARELHODEFEITOUSUALT'},{av:'AV10cAparelhoDefeitoDataUsuAlt',fld:'vCAPARELHODEFEITODATAUSUALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAparelhoDefeitoEmpresaId',fld:'vCAPARELHODEFEITOEMPRESAID'},{av:'AV7cAparelhoDefeitoId',fld:'vCAPARELHODEFEITOID'},{av:'AV8cAparelhoDefeitoDescricao',fld:'vCAPARELHODEFEITODESCRICAO'},{av:'AV9cAparelhoDefeitoUsuAlt',fld:'vCAPARELHODEFEITOUSUALT'},{av:'AV10cAparelhoDefeitoDataUsuAlt',fld:'vCAPARELHODEFEITODATAUSUALT'}],[]];
   this.setVCMap("AV11pAparelhoDefeitoEmpresaId", "vPAPARELHODEFEITOEMPRESAID", 0, "char");
   this.setVCMap("AV12pAparelhoDefeitoId", "vPAPARELHODEFEITOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0if0());