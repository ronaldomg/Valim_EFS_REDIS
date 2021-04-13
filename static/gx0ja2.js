/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:36:51.90
*/
gx.evt.autoSkip = false;
gx.define('gx0ja2', false, function () {
   this.ServerClass =  "gx0ja2" ;
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
      this.AV9pEntradaEmpresaId=gx.fn.getControlValue("vPENTRADAEMPRESAID") ;
      this.AV10pEntradaId=gx.fn.getIntegerValue("vPENTRADAID",'.') ;
      this.AV11pEntradaCCESeq=gx.fn.getIntegerValue("vPENTRADACCESEQ",'.') ;
   };
   this.e131rc2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141rc1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,36,37,40];
   this.GXLastCtrlId =40;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ja2",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(9252,33,"ENTRADACCESEQ","Sequencia","","EntradaCCESeq","int",0,"px",3,3,"right",null,[],9252,"EntradaCCESeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9250,34,"ENTRADACCEDATAHORA","Data/Hora Geração","Selecionar","EntradaCCEDataHora","dtime",0,"px",16,16,"right",null,[],9250,"EntradaCCEDataHora",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9251,35,"ENTRADACCEUSU","Usuário Geração","","EntradaCCEUsu","char",0,"px",12,12,"left",null,[],9251,"EntradaCCEUsu",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4637,36,"ENTRADAEMPRESAID","Empresa da Entrada","","EntradaEmpresaId","char",0,"px",10,10,"left",null,[],4637,"EntradaEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4638,37,"ENTRADAID","Código da Entrada","","EntradaId","int",0,"px",10,10,"right",null,[],4638,"EntradaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKENTRADACCESEQ", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADACCESEQ",gxz:"ZV6cEntradaCCESeq",gxold:"OV6cEntradaCCESeq",gxvar:"AV6cEntradaCCESeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cEntradaCCESeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cEntradaCCESeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCENTRADACCESEQ",gx.O.AV6cEntradaCCESeq,0)},c2v:function(){gx.O.AV6cEntradaCCESeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCENTRADACCESEQ",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKENTRADACCEDATAHORA", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADACCEDATAHORA",gxz:"ZV7cEntradaCCEDataHora",gxold:"OV7cEntradaCCEDataHora",gxvar:"AV7cEntradaCCEDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cEntradaCCEDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV7cEntradaCCEDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCENTRADACCEDATAHORA",gx.O.AV7cEntradaCCEDataHora,0)},c2v:function(){gx.O.AV7cEntradaCCEDataHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCENTRADACCEDATAHORA")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKENTRADACCEUSU", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADACCEUSU",gxz:"ZV8cEntradaCCEUsu",gxold:"OV8cEntradaCCEUsu",gxvar:"AV8cEntradaCCEUsu",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cEntradaCCEUsu=Value},v2z:function(Value){gx.O.ZV8cEntradaCCEUsu=Value},v2c:function(){gx.fn.setControlValue("vCENTRADACCEUSU",gx.O.AV8cEntradaCCEUsu,0)},c2v:function(){gx.O.AV8cEntradaCCEUsu=this.val()},val:function(){return gx.fn.getControlValue("vCENTRADACCEUSU")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"GROUP2",grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV14Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADACCESEQ",gxz:"Z9252EntradaCCESeq",gxold:"O9252EntradaCCESeq",gxvar:"A9252EntradaCCESeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9252EntradaCCESeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9252EntradaCCESeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADACCESEQ",row || gx.fn.currentGridRowImpl(31),gx.O.A9252EntradaCCESeq,0)},c2v:function(){gx.O.A9252EntradaCCESeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADACCESEQ",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADACCEDATAHORA",gxz:"Z9250EntradaCCEDataHora",gxold:"O9250EntradaCCEDataHora",gxvar:"A9250EntradaCCEDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9250EntradaCCEDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9250EntradaCCEDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADACCEDATAHORA",row || gx.fn.currentGridRowImpl(31),gx.O.A9250EntradaCCEDataHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9250EntradaCCEDataHora=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ENTRADACCEDATAHORA",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADACCEUSU",gxz:"Z9251EntradaCCEUsu",gxold:"O9251EntradaCCEUsu",gxvar:"A9251EntradaCCEUsu",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9251EntradaCCEUsu=Value},v2z:function(Value){gx.O.Z9251EntradaCCEUsu=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADACCEUSU",row || gx.fn.currentGridRowImpl(31),gx.O.A9251EntradaCCEUsu,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9251EntradaCCEUsu=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADACCEUSU",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAEMPRESAID",gxz:"Z4637EntradaEmpresaId",gxold:"O4637EntradaEmpresaId",gxvar:"A4637EntradaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4637EntradaEmpresaId=Value},v2z:function(Value){gx.O.Z4637EntradaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAEMPRESAID",row || gx.fn.currentGridRowImpl(31),gx.O.A4637EntradaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4637EntradaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAEMPRESAID",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAID",gxz:"Z4638EntradaId",gxold:"O4638EntradaId",gxvar:"A4638EntradaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4638EntradaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4638EntradaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAID",row || gx.fn.currentGridRowImpl(31),gx.O.A4638EntradaId,0)},c2v:function(){gx.O.A4638EntradaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAID",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TABLE4",grid:0};
   this.AV6cEntradaCCESeq = 0 ;
   this.ZV6cEntradaCCESeq = 0 ;
   this.OV6cEntradaCCESeq = 0 ;
   this.AV7cEntradaCCEDataHora = gx.date.nullDate() ;
   this.ZV7cEntradaCCEDataHora = gx.date.nullDate() ;
   this.OV7cEntradaCCEDataHora = gx.date.nullDate() ;
   this.AV8cEntradaCCEUsu = "" ;
   this.ZV8cEntradaCCEUsu = "" ;
   this.OV8cEntradaCCEUsu = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z9252EntradaCCESeq = 0 ;
   this.O9252EntradaCCESeq = 0 ;
   this.Z9250EntradaCCEDataHora = gx.date.nullDate() ;
   this.O9250EntradaCCEDataHora = gx.date.nullDate() ;
   this.Z9251EntradaCCEUsu = "" ;
   this.O9251EntradaCCEUsu = "" ;
   this.Z4637EntradaEmpresaId = "" ;
   this.O4637EntradaEmpresaId = "" ;
   this.Z4638EntradaId = 0 ;
   this.O4638EntradaId = 0 ;
   this.AV6cEntradaCCESeq = 0 ;
   this.AV7cEntradaCCEDataHora = gx.date.nullDate() ;
   this.AV8cEntradaCCEUsu = "" ;
   this.AV9pEntradaEmpresaId = "" ;
   this.AV10pEntradaId = 0 ;
   this.AV11pEntradaCCESeq = 0 ;
   this.AV5LinkSelection = "" ;
   this.A9252EntradaCCESeq = 0 ;
   this.A9250EntradaCCEDataHora = gx.date.nullDate() ;
   this.A9251EntradaCCEUsu = "" ;
   this.A4637EntradaEmpresaId = "" ;
   this.A4638EntradaId = 0 ;
   this.Events = {"e131rc2_client": ["ENTER", true] ,"e141rc1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaCCESeq',fld:'vCENTRADACCESEQ'},{av:'AV7cEntradaCCEDataHora',fld:'vCENTRADACCEDATAHORA'},{av:'AV8cEntradaCCEUsu',fld:'vCENTRADACCEUSU'},{av:'AV9pEntradaEmpresaId',fld:'vPENTRADAEMPRESAID',hsh:true},{av:'AV10pEntradaId',fld:'vPENTRADAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A9252EntradaCCESeq',fld:'ENTRADACCESEQ'}],[{av:'AV11pEntradaCCESeq',fld:'vPENTRADACCESEQ'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaCCESeq',fld:'vCENTRADACCESEQ'},{av:'AV7cEntradaCCEDataHora',fld:'vCENTRADACCEDATAHORA'},{av:'AV8cEntradaCCEUsu',fld:'vCENTRADACCEUSU'},{av:'AV9pEntradaEmpresaId',fld:'vPENTRADAEMPRESAID',hsh:true},{av:'AV10pEntradaId',fld:'vPENTRADAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaCCESeq',fld:'vCENTRADACCESEQ'},{av:'AV7cEntradaCCEDataHora',fld:'vCENTRADACCEDATAHORA'},{av:'AV8cEntradaCCEUsu',fld:'vCENTRADACCEUSU'},{av:'AV9pEntradaEmpresaId',fld:'vPENTRADAEMPRESAID',hsh:true},{av:'AV10pEntradaId',fld:'vPENTRADAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaCCESeq',fld:'vCENTRADACCESEQ'},{av:'AV7cEntradaCCEDataHora',fld:'vCENTRADACCEDATAHORA'},{av:'AV8cEntradaCCEUsu',fld:'vCENTRADACCEUSU'},{av:'AV9pEntradaEmpresaId',fld:'vPENTRADAEMPRESAID',hsh:true},{av:'AV10pEntradaId',fld:'vPENTRADAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaCCESeq',fld:'vCENTRADACCESEQ'},{av:'AV7cEntradaCCEDataHora',fld:'vCENTRADACCEDATAHORA'},{av:'AV8cEntradaCCEUsu',fld:'vCENTRADACCEUSU'},{av:'AV9pEntradaEmpresaId',fld:'vPENTRADAEMPRESAID',hsh:true},{av:'AV10pEntradaId',fld:'vPENTRADAID',hsh:true}],[]];
   this.setVCMap("AV9pEntradaEmpresaId", "vPENTRADAEMPRESAID", 0, "char");
   this.setVCMap("AV10pEntradaId", "vPENTRADAID", 0, "int");
   this.setVCMap("AV11pEntradaCCESeq", "vPENTRADACCESEQ", 0, "int");
   this.setVCMap("AV9pEntradaEmpresaId", "vPENTRADAEMPRESAID", 0, "char");
   this.setVCMap("AV10pEntradaId", "vPENTRADAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar({rfrVar:"AV9pEntradaEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV10pEntradaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0ja2());