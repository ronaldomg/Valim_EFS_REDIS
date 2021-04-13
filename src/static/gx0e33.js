/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:38:34.22
*/
gx.evt.autoSkip = false;
gx.define('gx0e33', false, function () {
   this.ServerClass =  "gx0e33" ;
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
      this.AV10pTrocaDevolucaoEmpresaId=gx.fn.getControlValue("vPTROCADEVOLUCAOEMPRESAID") ;
      this.AV11pTrocaDevolucaoTipo=gx.fn.getControlValue("vPTROCADEVOLUCAOTIPO") ;
      this.AV12pTrocaDevolucaoNumero=gx.fn.getIntegerValue("vPTROCADEVOLUCAONUMERO",'.') ;
      this.AV13pTrocaDevolucaoItemSeq=gx.fn.getIntegerValue("vPTROCADEVOLUCAOITEMSEQ",'.') ;
   };
   this.e131sk2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141sk1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,33,37,38,39,40,41,42,43,46];
   this.GXLastCtrlId =46;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",36,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0e33",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",37,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(6351,38,"TROCADEVOLUCAOITEMSEQ","Sequência do item da troca","","TrocaDevolucaoItemSeq","int",0,"px",3,3,"right",null,[],6351,"TrocaDevolucaoItemSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6340,39,"TROCADEVOLUCAOITEMSAIORIEMPID","Empresa Saída Origem Troca/Devolução","","TrocaDevolucaoItemSaiOriEmpId","char",0,"px",10,10,"left",null,[],6340,"TrocaDevolucaoItemSaiOriEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6341,40,"TROCADEVOLUCAOITEMSAIORIID","Saída Origem Troca/DevoluçãoTroca Devolucao Item Sai Ori Id","","TrocaDevolucaoItemSaiOriId","int",0,"px",10,10,"right",null,[],6341,"TrocaDevolucaoItemSaiOriId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6348,41,"TROCADEVOLUCAOEMPRESAID","Empresa","","TrocaDevolucaoEmpresaId","char",0,"px",10,10,"left",null,[],6348,"TrocaDevolucaoEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6349,42,"TROCADEVOLUCAOTIPO","Tipo Troca/Devolução","","TrocaDevolucaoTipo","char",0,"px",1,1,"left",null,[],6349,"TrocaDevolucaoTipo",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6350,43,"TROCADEVOLUCAONUMERO","Número Documento","","TrocaDevolucaoNumero","int",0,"px",10,10,"right",null,[],6350,"TrocaDevolucaoNumero",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTROCADEVOLUCAOITEMSEQ", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTROCADEVOLUCAOITEMSEQ",gxz:"ZV6cTrocaDevolucaoItemSeq",gxold:"OV6cTrocaDevolucaoItemSeq",gxvar:"AV6cTrocaDevolucaoItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTrocaDevolucaoItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cTrocaDevolucaoItemSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTROCADEVOLUCAOITEMSEQ",gx.O.AV6cTrocaDevolucaoItemSeq,0)},c2v:function(){gx.O.AV6cTrocaDevolucaoItemSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTROCADEVOLUCAOITEMSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTROCADEVOLUCAOITEMSAIORIEMPID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTROCADEVOLUCAOITEMSAIORIEMPID",gxz:"ZV7cTrocaDevolucaoItemSaiOriEmpId",gxold:"OV7cTrocaDevolucaoItemSaiOriEmpId",gxvar:"AV7cTrocaDevolucaoItemSaiOriEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cTrocaDevolucaoItemSaiOriEmpId=Value},v2z:function(Value){gx.O.ZV7cTrocaDevolucaoItemSaiOriEmpId=Value},v2c:function(){gx.fn.setControlValue("vCTROCADEVOLUCAOITEMSAIORIEMPID",gx.O.AV7cTrocaDevolucaoItemSaiOriEmpId,0)},c2v:function(){gx.O.AV7cTrocaDevolucaoItemSaiOriEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCTROCADEVOLUCAOITEMSAIORIEMPID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTROCADEVOLUCAOITEMSAIORIID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTROCADEVOLUCAOITEMSAIORIID",gxz:"ZV8cTrocaDevolucaoItemSaiOriId",gxold:"OV8cTrocaDevolucaoItemSaiOriId",gxvar:"AV8cTrocaDevolucaoItemSaiOriId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cTrocaDevolucaoItemSaiOriId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cTrocaDevolucaoItemSaiOriId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTROCADEVOLUCAOITEMSAIORIID",gx.O.AV8cTrocaDevolucaoItemSaiOriId,0)},c2v:function(){gx.O.AV8cTrocaDevolucaoItemSaiOriId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTROCADEVOLUCAOITEMSAIORIID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKTROCADEVOLUCAOITEMSAIORISEQ", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTROCADEVOLUCAOITEMSAIORISEQ",gxz:"ZV9cTrocaDevolucaoItemSaiOriSeq",gxold:"OV9cTrocaDevolucaoItemSaiOriSeq",gxvar:"AV9cTrocaDevolucaoItemSaiOriSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cTrocaDevolucaoItemSaiOriSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cTrocaDevolucaoItemSaiOriSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTROCADEVOLUCAOITEMSAIORISEQ",gx.O.AV9cTrocaDevolucaoItemSaiOriSeq,0)},c2v:function(){gx.O.AV9cTrocaDevolucaoItemSaiOriSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTROCADEVOLUCAOITEMSAIORISEQ",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"GROUP2",grid:0};
   GXValidFnc[33]={fld:"TABLE3",grid:0};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(36))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOITEMSEQ",gxz:"Z6351TrocaDevolucaoItemSeq",gxold:"O6351TrocaDevolucaoItemSeq",gxvar:"A6351TrocaDevolucaoItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6351TrocaDevolucaoItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6351TrocaDevolucaoItemSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TROCADEVOLUCAOITEMSEQ",row || gx.fn.currentGridRowImpl(36),gx.O.A6351TrocaDevolucaoItemSeq,0)},c2v:function(){gx.O.A6351TrocaDevolucaoItemSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TROCADEVOLUCAOITEMSEQ",row || gx.fn.currentGridRowImpl(36),'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOITEMSAIORIEMPID",gxz:"Z6340TrocaDevolucaoItemSaiOriEmpId",gxold:"O6340TrocaDevolucaoItemSaiOriEmpId",gxvar:"A6340TrocaDevolucaoItemSaiOriEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6340TrocaDevolucaoItemSaiOriEmpId=Value},v2z:function(Value){gx.O.Z6340TrocaDevolucaoItemSaiOriEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("TROCADEVOLUCAOITEMSAIORIEMPID",row || gx.fn.currentGridRowImpl(36),gx.O.A6340TrocaDevolucaoItemSaiOriEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6340TrocaDevolucaoItemSaiOriEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("TROCADEVOLUCAOITEMSAIORIEMPID",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOITEMSAIORIID",gxz:"Z6341TrocaDevolucaoItemSaiOriId",gxold:"O6341TrocaDevolucaoItemSaiOriId",gxvar:"A6341TrocaDevolucaoItemSaiOriId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6341TrocaDevolucaoItemSaiOriId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6341TrocaDevolucaoItemSaiOriId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TROCADEVOLUCAOITEMSAIORIID",row || gx.fn.currentGridRowImpl(36),gx.O.A6341TrocaDevolucaoItemSaiOriId,0)},c2v:function(){gx.O.A6341TrocaDevolucaoItemSaiOriId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TROCADEVOLUCAOITEMSAIORIID",row || gx.fn.currentGridRowImpl(36),'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOEMPRESAID",gxz:"Z6348TrocaDevolucaoEmpresaId",gxold:"O6348TrocaDevolucaoEmpresaId",gxvar:"A6348TrocaDevolucaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6348TrocaDevolucaoEmpresaId=Value},v2z:function(Value){gx.O.Z6348TrocaDevolucaoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TROCADEVOLUCAOEMPRESAID",row || gx.fn.currentGridRowImpl(36),gx.O.A6348TrocaDevolucaoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6348TrocaDevolucaoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TROCADEVOLUCAOEMPRESAID",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAOTIPO",gxz:"Z6349TrocaDevolucaoTipo",gxold:"O6349TrocaDevolucaoTipo",gxvar:"A6349TrocaDevolucaoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6349TrocaDevolucaoTipo=Value},v2z:function(Value){gx.O.Z6349TrocaDevolucaoTipo=Value},v2c:function(row){gx.fn.setGridControlValue("TROCADEVOLUCAOTIPO",row || gx.fn.currentGridRowImpl(36),gx.O.A6349TrocaDevolucaoTipo,0)},c2v:function(){gx.O.A6349TrocaDevolucaoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("TROCADEVOLUCAOTIPO",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TROCADEVOLUCAONUMERO",gxz:"Z6350TrocaDevolucaoNumero",gxold:"O6350TrocaDevolucaoNumero",gxvar:"A6350TrocaDevolucaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6350TrocaDevolucaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6350TrocaDevolucaoNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TROCADEVOLUCAONUMERO",row || gx.fn.currentGridRowImpl(36),gx.O.A6350TrocaDevolucaoNumero,0)},c2v:function(){gx.O.A6350TrocaDevolucaoNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TROCADEVOLUCAONUMERO",row || gx.fn.currentGridRowImpl(36),'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TABLE4",grid:0};
   this.AV6cTrocaDevolucaoItemSeq = 0 ;
   this.ZV6cTrocaDevolucaoItemSeq = 0 ;
   this.OV6cTrocaDevolucaoItemSeq = 0 ;
   this.AV7cTrocaDevolucaoItemSaiOriEmpId = "" ;
   this.ZV7cTrocaDevolucaoItemSaiOriEmpId = "" ;
   this.OV7cTrocaDevolucaoItemSaiOriEmpId = "" ;
   this.AV8cTrocaDevolucaoItemSaiOriId = 0 ;
   this.ZV8cTrocaDevolucaoItemSaiOriId = 0 ;
   this.OV8cTrocaDevolucaoItemSaiOriId = 0 ;
   this.AV9cTrocaDevolucaoItemSaiOriSeq = 0 ;
   this.ZV9cTrocaDevolucaoItemSaiOriSeq = 0 ;
   this.OV9cTrocaDevolucaoItemSaiOriSeq = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z6351TrocaDevolucaoItemSeq = 0 ;
   this.O6351TrocaDevolucaoItemSeq = 0 ;
   this.Z6340TrocaDevolucaoItemSaiOriEmpId = "" ;
   this.O6340TrocaDevolucaoItemSaiOriEmpId = "" ;
   this.Z6341TrocaDevolucaoItemSaiOriId = 0 ;
   this.O6341TrocaDevolucaoItemSaiOriId = 0 ;
   this.Z6348TrocaDevolucaoEmpresaId = "" ;
   this.O6348TrocaDevolucaoEmpresaId = "" ;
   this.Z6349TrocaDevolucaoTipo = "" ;
   this.O6349TrocaDevolucaoTipo = "" ;
   this.Z6350TrocaDevolucaoNumero = 0 ;
   this.O6350TrocaDevolucaoNumero = 0 ;
   this.AV6cTrocaDevolucaoItemSeq = 0 ;
   this.AV7cTrocaDevolucaoItemSaiOriEmpId = "" ;
   this.AV8cTrocaDevolucaoItemSaiOriId = 0 ;
   this.AV9cTrocaDevolucaoItemSaiOriSeq = 0 ;
   this.AV10pTrocaDevolucaoEmpresaId = "" ;
   this.AV11pTrocaDevolucaoTipo = "" ;
   this.AV12pTrocaDevolucaoNumero = 0 ;
   this.AV13pTrocaDevolucaoItemSeq = 0 ;
   this.A6342TrocaDevolucaoItemSaiOriSeq = 0 ;
   this.AV5LinkSelection = "" ;
   this.A6351TrocaDevolucaoItemSeq = 0 ;
   this.A6340TrocaDevolucaoItemSaiOriEmpId = "" ;
   this.A6341TrocaDevolucaoItemSaiOriId = 0 ;
   this.A6348TrocaDevolucaoEmpresaId = "" ;
   this.A6349TrocaDevolucaoTipo = "" ;
   this.A6350TrocaDevolucaoNumero = 0 ;
   this.Events = {"e131sk2_client": ["ENTER", true] ,"e141sk1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTrocaDevolucaoItemSeq',fld:'vCTROCADEVOLUCAOITEMSEQ'},{av:'AV7cTrocaDevolucaoItemSaiOriEmpId',fld:'vCTROCADEVOLUCAOITEMSAIORIEMPID'},{av:'AV8cTrocaDevolucaoItemSaiOriId',fld:'vCTROCADEVOLUCAOITEMSAIORIID'},{av:'AV9cTrocaDevolucaoItemSaiOriSeq',fld:'vCTROCADEVOLUCAOITEMSAIORISEQ'},{av:'AV10pTrocaDevolucaoEmpresaId',fld:'vPTROCADEVOLUCAOEMPRESAID',hsh:true},{av:'AV11pTrocaDevolucaoTipo',fld:'vPTROCADEVOLUCAOTIPO',hsh:true},{av:'AV12pTrocaDevolucaoNumero',fld:'vPTROCADEVOLUCAONUMERO',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A6351TrocaDevolucaoItemSeq',fld:'TROCADEVOLUCAOITEMSEQ'}],[{av:'AV13pTrocaDevolucaoItemSeq',fld:'vPTROCADEVOLUCAOITEMSEQ'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTrocaDevolucaoItemSeq',fld:'vCTROCADEVOLUCAOITEMSEQ'},{av:'AV7cTrocaDevolucaoItemSaiOriEmpId',fld:'vCTROCADEVOLUCAOITEMSAIORIEMPID'},{av:'AV8cTrocaDevolucaoItemSaiOriId',fld:'vCTROCADEVOLUCAOITEMSAIORIID'},{av:'AV9cTrocaDevolucaoItemSaiOriSeq',fld:'vCTROCADEVOLUCAOITEMSAIORISEQ'},{av:'AV10pTrocaDevolucaoEmpresaId',fld:'vPTROCADEVOLUCAOEMPRESAID',hsh:true},{av:'AV11pTrocaDevolucaoTipo',fld:'vPTROCADEVOLUCAOTIPO',hsh:true},{av:'AV12pTrocaDevolucaoNumero',fld:'vPTROCADEVOLUCAONUMERO',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTrocaDevolucaoItemSeq',fld:'vCTROCADEVOLUCAOITEMSEQ'},{av:'AV7cTrocaDevolucaoItemSaiOriEmpId',fld:'vCTROCADEVOLUCAOITEMSAIORIEMPID'},{av:'AV8cTrocaDevolucaoItemSaiOriId',fld:'vCTROCADEVOLUCAOITEMSAIORIID'},{av:'AV9cTrocaDevolucaoItemSaiOriSeq',fld:'vCTROCADEVOLUCAOITEMSAIORISEQ'},{av:'AV10pTrocaDevolucaoEmpresaId',fld:'vPTROCADEVOLUCAOEMPRESAID',hsh:true},{av:'AV11pTrocaDevolucaoTipo',fld:'vPTROCADEVOLUCAOTIPO',hsh:true},{av:'AV12pTrocaDevolucaoNumero',fld:'vPTROCADEVOLUCAONUMERO',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTrocaDevolucaoItemSeq',fld:'vCTROCADEVOLUCAOITEMSEQ'},{av:'AV7cTrocaDevolucaoItemSaiOriEmpId',fld:'vCTROCADEVOLUCAOITEMSAIORIEMPID'},{av:'AV8cTrocaDevolucaoItemSaiOriId',fld:'vCTROCADEVOLUCAOITEMSAIORIID'},{av:'AV9cTrocaDevolucaoItemSaiOriSeq',fld:'vCTROCADEVOLUCAOITEMSAIORISEQ'},{av:'AV10pTrocaDevolucaoEmpresaId',fld:'vPTROCADEVOLUCAOEMPRESAID',hsh:true},{av:'AV11pTrocaDevolucaoTipo',fld:'vPTROCADEVOLUCAOTIPO',hsh:true},{av:'AV12pTrocaDevolucaoNumero',fld:'vPTROCADEVOLUCAONUMERO',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTrocaDevolucaoItemSeq',fld:'vCTROCADEVOLUCAOITEMSEQ'},{av:'AV7cTrocaDevolucaoItemSaiOriEmpId',fld:'vCTROCADEVOLUCAOITEMSAIORIEMPID'},{av:'AV8cTrocaDevolucaoItemSaiOriId',fld:'vCTROCADEVOLUCAOITEMSAIORIID'},{av:'AV9cTrocaDevolucaoItemSaiOriSeq',fld:'vCTROCADEVOLUCAOITEMSAIORISEQ'},{av:'AV10pTrocaDevolucaoEmpresaId',fld:'vPTROCADEVOLUCAOEMPRESAID',hsh:true},{av:'AV11pTrocaDevolucaoTipo',fld:'vPTROCADEVOLUCAOTIPO',hsh:true},{av:'AV12pTrocaDevolucaoNumero',fld:'vPTROCADEVOLUCAONUMERO',hsh:true}],[]];
   this.setVCMap("AV10pTrocaDevolucaoEmpresaId", "vPTROCADEVOLUCAOEMPRESAID", 0, "char");
   this.setVCMap("AV11pTrocaDevolucaoTipo", "vPTROCADEVOLUCAOTIPO", 0, "char");
   this.setVCMap("AV12pTrocaDevolucaoNumero", "vPTROCADEVOLUCAONUMERO", 0, "int");
   this.setVCMap("AV13pTrocaDevolucaoItemSeq", "vPTROCADEVOLUCAOITEMSEQ", 0, "int");
   this.setVCMap("AV10pTrocaDevolucaoEmpresaId", "vPTROCADEVOLUCAOEMPRESAID", 0, "char");
   this.setVCMap("AV11pTrocaDevolucaoTipo", "vPTROCADEVOLUCAOTIPO", 0, "char");
   this.setVCMap("AV12pTrocaDevolucaoNumero", "vPTROCADEVOLUCAONUMERO", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar({rfrVar:"AV10pTrocaDevolucaoEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV11pTrocaDevolucaoTipo"});
   Grid1Container.addRefreshingVar({rfrVar:"AV12pTrocaDevolucaoNumero"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0e33());