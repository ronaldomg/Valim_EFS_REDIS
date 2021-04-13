/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:35:26.30
*/
gx.evt.autoSkip = false;
gx.define('gx0dd4', false, function () {
   this.ServerClass =  "gx0dd4" ;
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
      this.AV9pReducaoZEmpresaId=gx.fn.getControlValue("vPREDUCAOZEMPRESAID") ;
      this.AV10pReducaoZNumeroLoja=gx.fn.getIntegerValue("vPREDUCAOZNUMEROLOJA",'.') ;
      this.AV11pReducaoZSequenciaECF=gx.fn.getIntegerValue("vPREDUCAOZSEQUENCIAECF",'.') ;
      this.AV12pReducaoZData=gx.fn.getDateValue("vPREDUCAOZDATA") ;
      this.AV13pAliquotaReducaoCodigo=gx.fn.getControlValue("vPALIQUOTAREDUCAOCODIGO") ;
   };
   this.e131py2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141py1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,36,37,38,39,40,43];
   this.GXLastCtrlId =43;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0dd4",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(3997,33,"ALIQUOTAREDUCAOCODIGO","Código da Alíquota","","AliquotaReducaoCodigo","svchar",0,"px",10,10,"left",null,[],3997,"AliquotaReducaoCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3992,34,"ALIQUOTAREDUCAOVALOR","Valor da Alíquota","Selecionar","AliquotaReducaoValor","decimal",0,"px",22,22,"right",null,[],3992,"AliquotaReducaoValor",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3993,35,"ALIQUOTAREDUCAODATAHORAALT","Data/Hora de Alteração","","AliquotaReducaoDataHoraAlt","dtime",0,"px",16,16,"right",null,[],3993,"AliquotaReducaoDataHoraAlt",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3994,36,"ALIQUOTAREDUCAOUSUARIOALT","Usuário de Alteração","","AliquotaReducaoUsuarioAlt","char",0,"px",12,12,"left",null,[],3994,"AliquotaReducaoUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3995,37,"REDUCAOZEMPRESAID","Empresa da Redução Z","","ReducaoZEmpresaId","char",0,"px",10,10,"left",null,[],3995,"ReducaoZEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5775,38,"REDUCAOZNUMEROLOJA","Número da Loja da Redução Z","","ReducaoZNumeroLoja","int",0,"px",4,4,"right",null,[],5775,"ReducaoZNumeroLoja",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4326,39,"REDUCAOZSEQUENCIAECF","Seq. do ECF","","ReducaoZSequenciaECF","int",0,"px",3,3,"right",null,[],4326,"ReducaoZSequenciaECF",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3996,40,"REDUCAOZDATA","Data da Redução Z","","ReducaoZData","date",0,"px",10,10,"right",null,[],3996,"ReducaoZData",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKALIQUOTAREDUCAOCODIGO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCALIQUOTAREDUCAOCODIGO",gxz:"ZV6cAliquotaReducaoCodigo",gxold:"OV6cAliquotaReducaoCodigo",gxvar:"AV6cAliquotaReducaoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cAliquotaReducaoCodigo=Value},v2z:function(Value){gx.O.ZV6cAliquotaReducaoCodigo=Value},v2c:function(){gx.fn.setControlValue("vCALIQUOTAREDUCAOCODIGO",gx.O.AV6cAliquotaReducaoCodigo,0)},c2v:function(){gx.O.AV6cAliquotaReducaoCodigo=this.val()},val:function(){return gx.fn.getControlValue("vCALIQUOTAREDUCAOCODIGO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKALIQUOTAREDUCAOVALOR", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCALIQUOTAREDUCAOVALOR",gxz:"ZV7cAliquotaReducaoValor",gxold:"OV7cAliquotaReducaoValor",gxvar:"AV7cAliquotaReducaoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cAliquotaReducaoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV7cAliquotaReducaoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCALIQUOTAREDUCAOVALOR",gx.O.AV7cAliquotaReducaoValor,2,',')},c2v:function(){gx.O.AV7cAliquotaReducaoValor=this.val()},val:function(){return gx.fn.getDecimalValue("vCALIQUOTAREDUCAOVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKALIQUOTAREDUCAODATAHORAALT", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCALIQUOTAREDUCAODATAHORAALT",gxz:"ZV8cAliquotaReducaoDataHoraAlt",gxold:"OV8cAliquotaReducaoDataHoraAlt",gxvar:"AV8cAliquotaReducaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cAliquotaReducaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8cAliquotaReducaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCALIQUOTAREDUCAODATAHORAALT",gx.O.AV8cAliquotaReducaoDataHoraAlt,0)},c2v:function(){gx.O.AV8cAliquotaReducaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCALIQUOTAREDUCAODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"GROUP2",grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ALIQUOTAREDUCAOCODIGO",gxz:"Z3997AliquotaReducaoCodigo",gxold:"O3997AliquotaReducaoCodigo",gxvar:"A3997AliquotaReducaoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3997AliquotaReducaoCodigo=Value},v2z:function(Value){gx.O.Z3997AliquotaReducaoCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("ALIQUOTAREDUCAOCODIGO",row || gx.fn.currentGridRowImpl(31),gx.O.A3997AliquotaReducaoCodigo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3997AliquotaReducaoCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("ALIQUOTAREDUCAOCODIGO",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ALIQUOTAREDUCAOVALOR",gxz:"Z3992AliquotaReducaoValor",gxold:"O3992AliquotaReducaoValor",gxvar:"A3992AliquotaReducaoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3992AliquotaReducaoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3992AliquotaReducaoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ALIQUOTAREDUCAOVALOR",row || gx.fn.currentGridRowImpl(31),gx.O.A3992AliquotaReducaoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3992AliquotaReducaoValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ALIQUOTAREDUCAOVALOR",row || gx.fn.currentGridRowImpl(31),'.',',')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ALIQUOTAREDUCAODATAHORAALT",gxz:"Z3993AliquotaReducaoDataHoraAlt",gxold:"O3993AliquotaReducaoDataHoraAlt",gxvar:"A3993AliquotaReducaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3993AliquotaReducaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3993AliquotaReducaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ALIQUOTAREDUCAODATAHORAALT",row || gx.fn.currentGridRowImpl(31),gx.O.A3993AliquotaReducaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3993AliquotaReducaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ALIQUOTAREDUCAODATAHORAALT",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ALIQUOTAREDUCAOUSUARIOALT",gxz:"Z3994AliquotaReducaoUsuarioAlt",gxold:"O3994AliquotaReducaoUsuarioAlt",gxvar:"A3994AliquotaReducaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3994AliquotaReducaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z3994AliquotaReducaoUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("ALIQUOTAREDUCAOUSUARIOALT",row || gx.fn.currentGridRowImpl(31),gx.O.A3994AliquotaReducaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3994AliquotaReducaoUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("ALIQUOTAREDUCAOUSUARIOALT",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZEMPRESAID",gxz:"Z3995ReducaoZEmpresaId",gxold:"O3995ReducaoZEmpresaId",gxvar:"A3995ReducaoZEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3995ReducaoZEmpresaId=Value},v2z:function(Value){gx.O.Z3995ReducaoZEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("REDUCAOZEMPRESAID",row || gx.fn.currentGridRowImpl(31),gx.O.A3995ReducaoZEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3995ReducaoZEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("REDUCAOZEMPRESAID",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZNUMEROLOJA",gxz:"Z5775ReducaoZNumeroLoja",gxold:"O5775ReducaoZNumeroLoja",gxvar:"A5775ReducaoZNumeroLoja",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5775ReducaoZNumeroLoja=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5775ReducaoZNumeroLoja=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REDUCAOZNUMEROLOJA",row || gx.fn.currentGridRowImpl(31),gx.O.A5775ReducaoZNumeroLoja,0)},c2v:function(){gx.O.A5775ReducaoZNumeroLoja=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REDUCAOZNUMEROLOJA",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZSEQUENCIAECF",gxz:"Z4326ReducaoZSequenciaECF",gxold:"O4326ReducaoZSequenciaECF",gxvar:"A4326ReducaoZSequenciaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4326ReducaoZSequenciaECF=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4326ReducaoZSequenciaECF=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REDUCAOZSEQUENCIAECF",row || gx.fn.currentGridRowImpl(31),gx.O.A4326ReducaoZSequenciaECF,0)},c2v:function(){gx.O.A4326ReducaoZSequenciaECF=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REDUCAOZSEQUENCIAECF",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZDATA",gxz:"Z3996ReducaoZData",gxold:"O3996ReducaoZData",gxvar:"A3996ReducaoZData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3996ReducaoZData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3996ReducaoZData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("REDUCAOZDATA",row || gx.fn.currentGridRowImpl(31),gx.O.A3996ReducaoZData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3996ReducaoZData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("REDUCAOZDATA",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TABLE4",grid:0};
   this.AV6cAliquotaReducaoCodigo = "" ;
   this.ZV6cAliquotaReducaoCodigo = "" ;
   this.OV6cAliquotaReducaoCodigo = "" ;
   this.AV7cAliquotaReducaoValor = 0 ;
   this.ZV7cAliquotaReducaoValor = 0 ;
   this.OV7cAliquotaReducaoValor = 0 ;
   this.AV8cAliquotaReducaoDataHoraAlt = gx.date.nullDate() ;
   this.ZV8cAliquotaReducaoDataHoraAlt = gx.date.nullDate() ;
   this.OV8cAliquotaReducaoDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z3997AliquotaReducaoCodigo = "" ;
   this.O3997AliquotaReducaoCodigo = "" ;
   this.Z3992AliquotaReducaoValor = 0 ;
   this.O3992AliquotaReducaoValor = 0 ;
   this.Z3993AliquotaReducaoDataHoraAlt = gx.date.nullDate() ;
   this.O3993AliquotaReducaoDataHoraAlt = gx.date.nullDate() ;
   this.Z3994AliquotaReducaoUsuarioAlt = "" ;
   this.O3994AliquotaReducaoUsuarioAlt = "" ;
   this.Z3995ReducaoZEmpresaId = "" ;
   this.O3995ReducaoZEmpresaId = "" ;
   this.Z5775ReducaoZNumeroLoja = 0 ;
   this.O5775ReducaoZNumeroLoja = 0 ;
   this.Z4326ReducaoZSequenciaECF = 0 ;
   this.O4326ReducaoZSequenciaECF = 0 ;
   this.Z3996ReducaoZData = gx.date.nullDate() ;
   this.O3996ReducaoZData = gx.date.nullDate() ;
   this.AV6cAliquotaReducaoCodigo = "" ;
   this.AV7cAliquotaReducaoValor = 0 ;
   this.AV8cAliquotaReducaoDataHoraAlt = gx.date.nullDate() ;
   this.AV9pReducaoZEmpresaId = "" ;
   this.AV10pReducaoZNumeroLoja = 0 ;
   this.AV11pReducaoZSequenciaECF = 0 ;
   this.AV12pReducaoZData = gx.date.nullDate() ;
   this.AV13pAliquotaReducaoCodigo = "" ;
   this.AV5LinkSelection = "" ;
   this.A3997AliquotaReducaoCodigo = "" ;
   this.A3992AliquotaReducaoValor = 0 ;
   this.A3993AliquotaReducaoDataHoraAlt = gx.date.nullDate() ;
   this.A3994AliquotaReducaoUsuarioAlt = "" ;
   this.A3995ReducaoZEmpresaId = "" ;
   this.A5775ReducaoZNumeroLoja = 0 ;
   this.A4326ReducaoZSequenciaECF = 0 ;
   this.A3996ReducaoZData = gx.date.nullDate() ;
   this.Events = {"e131py2_client": ["ENTER", true] ,"e141py1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAliquotaReducaoCodigo',fld:'vCALIQUOTAREDUCAOCODIGO'},{av:'AV7cAliquotaReducaoValor',fld:'vCALIQUOTAREDUCAOVALOR'},{av:'AV8cAliquotaReducaoDataHoraAlt',fld:'vCALIQUOTAREDUCAODATAHORAALT'},{av:'AV9pReducaoZEmpresaId',fld:'vPREDUCAOZEMPRESAID',hsh:true},{av:'AV10pReducaoZNumeroLoja',fld:'vPREDUCAOZNUMEROLOJA',hsh:true},{av:'AV11pReducaoZSequenciaECF',fld:'vPREDUCAOZSEQUENCIAECF',hsh:true},{av:'AV12pReducaoZData',fld:'vPREDUCAOZDATA',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A3997AliquotaReducaoCodigo',fld:'ALIQUOTAREDUCAOCODIGO'}],[{av:'AV13pAliquotaReducaoCodigo',fld:'vPALIQUOTAREDUCAOCODIGO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAliquotaReducaoCodigo',fld:'vCALIQUOTAREDUCAOCODIGO'},{av:'AV7cAliquotaReducaoValor',fld:'vCALIQUOTAREDUCAOVALOR'},{av:'AV8cAliquotaReducaoDataHoraAlt',fld:'vCALIQUOTAREDUCAODATAHORAALT'},{av:'AV9pReducaoZEmpresaId',fld:'vPREDUCAOZEMPRESAID',hsh:true},{av:'AV10pReducaoZNumeroLoja',fld:'vPREDUCAOZNUMEROLOJA',hsh:true},{av:'AV11pReducaoZSequenciaECF',fld:'vPREDUCAOZSEQUENCIAECF',hsh:true},{av:'AV12pReducaoZData',fld:'vPREDUCAOZDATA',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAliquotaReducaoCodigo',fld:'vCALIQUOTAREDUCAOCODIGO'},{av:'AV7cAliquotaReducaoValor',fld:'vCALIQUOTAREDUCAOVALOR'},{av:'AV8cAliquotaReducaoDataHoraAlt',fld:'vCALIQUOTAREDUCAODATAHORAALT'},{av:'AV9pReducaoZEmpresaId',fld:'vPREDUCAOZEMPRESAID',hsh:true},{av:'AV10pReducaoZNumeroLoja',fld:'vPREDUCAOZNUMEROLOJA',hsh:true},{av:'AV11pReducaoZSequenciaECF',fld:'vPREDUCAOZSEQUENCIAECF',hsh:true},{av:'AV12pReducaoZData',fld:'vPREDUCAOZDATA',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAliquotaReducaoCodigo',fld:'vCALIQUOTAREDUCAOCODIGO'},{av:'AV7cAliquotaReducaoValor',fld:'vCALIQUOTAREDUCAOVALOR'},{av:'AV8cAliquotaReducaoDataHoraAlt',fld:'vCALIQUOTAREDUCAODATAHORAALT'},{av:'AV9pReducaoZEmpresaId',fld:'vPREDUCAOZEMPRESAID',hsh:true},{av:'AV10pReducaoZNumeroLoja',fld:'vPREDUCAOZNUMEROLOJA',hsh:true},{av:'AV11pReducaoZSequenciaECF',fld:'vPREDUCAOZSEQUENCIAECF',hsh:true},{av:'AV12pReducaoZData',fld:'vPREDUCAOZDATA',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAliquotaReducaoCodigo',fld:'vCALIQUOTAREDUCAOCODIGO'},{av:'AV7cAliquotaReducaoValor',fld:'vCALIQUOTAREDUCAOVALOR'},{av:'AV8cAliquotaReducaoDataHoraAlt',fld:'vCALIQUOTAREDUCAODATAHORAALT'},{av:'AV9pReducaoZEmpresaId',fld:'vPREDUCAOZEMPRESAID',hsh:true},{av:'AV10pReducaoZNumeroLoja',fld:'vPREDUCAOZNUMEROLOJA',hsh:true},{av:'AV11pReducaoZSequenciaECF',fld:'vPREDUCAOZSEQUENCIAECF',hsh:true},{av:'AV12pReducaoZData',fld:'vPREDUCAOZDATA',hsh:true}],[]];
   this.setVCMap("AV9pReducaoZEmpresaId", "vPREDUCAOZEMPRESAID", 0, "char");
   this.setVCMap("AV10pReducaoZNumeroLoja", "vPREDUCAOZNUMEROLOJA", 0, "int");
   this.setVCMap("AV11pReducaoZSequenciaECF", "vPREDUCAOZSEQUENCIAECF", 0, "int");
   this.setVCMap("AV12pReducaoZData", "vPREDUCAOZDATA", 0, "date");
   this.setVCMap("AV13pAliquotaReducaoCodigo", "vPALIQUOTAREDUCAOCODIGO", 0, "svchar");
   this.setVCMap("AV9pReducaoZEmpresaId", "vPREDUCAOZEMPRESAID", 0, "char");
   this.setVCMap("AV10pReducaoZNumeroLoja", "vPREDUCAOZNUMEROLOJA", 0, "int");
   this.setVCMap("AV11pReducaoZSequenciaECF", "vPREDUCAOZSEQUENCIAECF", 0, "int");
   this.setVCMap("AV12pReducaoZData", "vPREDUCAOZDATA", 0, "date");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar({rfrVar:"AV9pReducaoZEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV10pReducaoZNumeroLoja"});
   Grid1Container.addRefreshingVar({rfrVar:"AV11pReducaoZSequenciaECF"});
   Grid1Container.addRefreshingVar({rfrVar:"AV12pReducaoZData"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0dd4());