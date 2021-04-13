/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:23:46.34
*/
gx.evt.autoSkip = false;
gx.define('gx0900', false, function () {
   this.ServerClass =  "gx0900" ;
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
      this.AV13pAcervoEmpresaId=gx.fn.getControlValue("vPACERVOEMPRESAID") ;
      this.AV14pAcervoId=gx.fn.getIntegerValue("vPACERVOID",'.') ;
   };
   this.e131ha2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141ha1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,63];
   this.GXLastCtrlId =63;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0900",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(3082,53,"ACERVOEMPRESAID","Empresa Acervo","","AcervoEmpresaId","char",0,"px",10,10,"left",null,[],3082,"AcervoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(39,54,"ACERVOID","Código Acervo","","AcervoId","int",0,"px",7,7,"right",null,[],39,"AcervoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(40,55,"ACERVOTITULO","Título do Acervo","Selecionar","AcervoTitulo","svchar",0,"px",50,50,"left",null,[],40,"AcervoTitulo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(112,56,"ACERVODATAAQUISICAO","Data Aquisição","","AcervoDataAquisicao","date",0,"px",10,10,"right",null,[],112,"AcervoDataAquisicao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(113,57,"ACERVODATABAIXA","Data Baixa","","AcervoDataBaixa","date",0,"px",10,10,"right",null,[],113,"AcervoDataBaixa",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(114,58,"ACERVOEXEMPLAR","Exemplar","","AcervoExemplar","int",0,"px",3,3,"right",null,[],114,"AcervoExemplar",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(115,59,"ACERVOVOLUME","Volume","","AcervoVolume","int",0,"px",3,3,"right",null,[],115,"AcervoVolume",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(116,60,"ACERVOEDICAO","Edição","","AcervoEdicao","int",0,"px",3,3,"right",null,[],116,"AcervoEdicao",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKACERVOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCACERVOEMPRESAID",gxz:"ZV6cAcervoEmpresaId",gxold:"OV6cAcervoEmpresaId",gxvar:"AV6cAcervoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cAcervoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cAcervoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCACERVOEMPRESAID",gx.O.AV6cAcervoEmpresaId,0)},c2v:function(){gx.O.AV6cAcervoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCACERVOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKACERVOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCACERVOID",gxz:"ZV7cAcervoId",gxold:"OV7cAcervoId",gxvar:"AV7cAcervoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cAcervoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cAcervoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCACERVOID",gx.O.AV7cAcervoId,0)},c2v:function(){gx.O.AV7cAcervoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCACERVOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKACERVOTITULO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCACERVOTITULO",gxz:"ZV8cAcervoTitulo",gxold:"OV8cAcervoTitulo",gxvar:"AV8cAcervoTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cAcervoTitulo=Value},v2z:function(Value){gx.O.ZV8cAcervoTitulo=Value},v2c:function(){gx.fn.setControlValue("vCACERVOTITULO",gx.O.AV8cAcervoTitulo,0)},c2v:function(){gx.O.AV8cAcervoTitulo=this.val()},val:function(){return gx.fn.getControlValue("vCACERVOTITULO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKACERVOSUBTITULO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCACERVOSUBTITULO",gxz:"ZV9cAcervoSubtitulo",gxold:"OV9cAcervoSubtitulo",gxvar:"AV9cAcervoSubtitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cAcervoSubtitulo=Value},v2z:function(Value){gx.O.ZV9cAcervoSubtitulo=Value},v2c:function(){gx.fn.setControlValue("vCACERVOSUBTITULO",gx.O.AV9cAcervoSubtitulo,0)},c2v:function(){gx.O.AV9cAcervoSubtitulo=this.val()},val:function(){return gx.fn.getControlValue("vCACERVOSUBTITULO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKACERVODATAAQUISICAO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCACERVODATAAQUISICAO",gxz:"ZV10cAcervoDataAquisicao",gxold:"OV10cAcervoDataAquisicao",gxvar:"AV10cAcervoDataAquisicao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cAcervoDataAquisicao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cAcervoDataAquisicao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCACERVODATAAQUISICAO",gx.O.AV10cAcervoDataAquisicao,0)},c2v:function(){gx.O.AV10cAcervoDataAquisicao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCACERVODATAAQUISICAO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKACERVODATABAIXA", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCACERVODATABAIXA",gxz:"ZV11cAcervoDataBaixa",gxold:"OV11cAcervoDataBaixa",gxvar:"AV11cAcervoDataBaixa",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cAcervoDataBaixa=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11cAcervoDataBaixa=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCACERVODATABAIXA",gx.O.AV11cAcervoDataBaixa,0)},c2v:function(){gx.O.AV11cAcervoDataBaixa=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCACERVODATABAIXA")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKACERVOEXEMPLAR", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCACERVOEXEMPLAR",gxz:"ZV12cAcervoExemplar",gxold:"OV12cAcervoExemplar",gxvar:"AV12cAcervoExemplar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cAcervoExemplar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cAcervoExemplar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCACERVOEXEMPLAR",gx.O.AV12cAcervoExemplar,0)},c2v:function(){gx.O.AV12cAcervoExemplar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCACERVOEXEMPLAR",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERVOEMPRESAID",gxz:"Z3082AcervoEmpresaId",gxold:"O3082AcervoEmpresaId",gxvar:"A3082AcervoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3082AcervoEmpresaId=Value},v2z:function(Value){gx.O.Z3082AcervoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("ACERVOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A3082AcervoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3082AcervoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("ACERVOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERVOID",gxz:"Z39AcervoId",gxold:"O39AcervoId",gxvar:"A39AcervoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A39AcervoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z39AcervoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ACERVOID",row || gx.fn.currentGridRowImpl(51),gx.O.A39AcervoId,0)},c2v:function(){gx.O.A39AcervoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ACERVOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERVOTITULO",gxz:"Z40AcervoTitulo",gxold:"O40AcervoTitulo",gxvar:"A40AcervoTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A40AcervoTitulo=Value},v2z:function(Value){gx.O.Z40AcervoTitulo=Value},v2c:function(row){gx.fn.setGridControlValue("ACERVOTITULO",row || gx.fn.currentGridRowImpl(51),gx.O.A40AcervoTitulo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A40AcervoTitulo=this.val()},val:function(row){return gx.fn.getGridControlValue("ACERVOTITULO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERVODATAAQUISICAO",gxz:"Z112AcervoDataAquisicao",gxold:"O112AcervoDataAquisicao",gxvar:"A112AcervoDataAquisicao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A112AcervoDataAquisicao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z112AcervoDataAquisicao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ACERVODATAAQUISICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A112AcervoDataAquisicao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A112AcervoDataAquisicao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ACERVODATAAQUISICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERVODATABAIXA",gxz:"Z113AcervoDataBaixa",gxold:"O113AcervoDataBaixa",gxvar:"A113AcervoDataBaixa",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A113AcervoDataBaixa=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z113AcervoDataBaixa=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ACERVODATABAIXA",row || gx.fn.currentGridRowImpl(51),gx.O.A113AcervoDataBaixa,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A113AcervoDataBaixa=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ACERVODATABAIXA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERVOEXEMPLAR",gxz:"Z114AcervoExemplar",gxold:"O114AcervoExemplar",gxvar:"A114AcervoExemplar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A114AcervoExemplar=gx.num.intval(Value)},v2z:function(Value){gx.O.Z114AcervoExemplar=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ACERVOEXEMPLAR",row || gx.fn.currentGridRowImpl(51),gx.O.A114AcervoExemplar,0)},c2v:function(){gx.O.A114AcervoExemplar=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ACERVOEXEMPLAR",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERVOVOLUME",gxz:"Z115AcervoVolume",gxold:"O115AcervoVolume",gxvar:"A115AcervoVolume",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A115AcervoVolume=gx.num.intval(Value)},v2z:function(Value){gx.O.Z115AcervoVolume=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ACERVOVOLUME",row || gx.fn.currentGridRowImpl(51),gx.O.A115AcervoVolume,0)},c2v:function(){gx.O.A115AcervoVolume=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ACERVOVOLUME",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERVOEDICAO",gxz:"Z116AcervoEdicao",gxold:"O116AcervoEdicao",gxvar:"A116AcervoEdicao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A116AcervoEdicao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z116AcervoEdicao=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ACERVOEDICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A116AcervoEdicao,0)},c2v:function(){gx.O.A116AcervoEdicao=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ACERVOEDICAO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABLE4",grid:0};
   this.AV6cAcervoEmpresaId = "" ;
   this.ZV6cAcervoEmpresaId = "" ;
   this.OV6cAcervoEmpresaId = "" ;
   this.AV7cAcervoId = 0 ;
   this.ZV7cAcervoId = 0 ;
   this.OV7cAcervoId = 0 ;
   this.AV8cAcervoTitulo = "" ;
   this.ZV8cAcervoTitulo = "" ;
   this.OV8cAcervoTitulo = "" ;
   this.AV9cAcervoSubtitulo = "" ;
   this.ZV9cAcervoSubtitulo = "" ;
   this.OV9cAcervoSubtitulo = "" ;
   this.AV10cAcervoDataAquisicao = gx.date.nullDate() ;
   this.ZV10cAcervoDataAquisicao = gx.date.nullDate() ;
   this.OV10cAcervoDataAquisicao = gx.date.nullDate() ;
   this.AV11cAcervoDataBaixa = gx.date.nullDate() ;
   this.ZV11cAcervoDataBaixa = gx.date.nullDate() ;
   this.OV11cAcervoDataBaixa = gx.date.nullDate() ;
   this.AV12cAcervoExemplar = 0 ;
   this.ZV12cAcervoExemplar = 0 ;
   this.OV12cAcervoExemplar = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z3082AcervoEmpresaId = "" ;
   this.O3082AcervoEmpresaId = "" ;
   this.Z39AcervoId = 0 ;
   this.O39AcervoId = 0 ;
   this.Z40AcervoTitulo = "" ;
   this.O40AcervoTitulo = "" ;
   this.Z112AcervoDataAquisicao = gx.date.nullDate() ;
   this.O112AcervoDataAquisicao = gx.date.nullDate() ;
   this.Z113AcervoDataBaixa = gx.date.nullDate() ;
   this.O113AcervoDataBaixa = gx.date.nullDate() ;
   this.Z114AcervoExemplar = 0 ;
   this.O114AcervoExemplar = 0 ;
   this.Z115AcervoVolume = 0 ;
   this.O115AcervoVolume = 0 ;
   this.Z116AcervoEdicao = 0 ;
   this.O116AcervoEdicao = 0 ;
   this.AV6cAcervoEmpresaId = "" ;
   this.AV7cAcervoId = 0 ;
   this.AV8cAcervoTitulo = "" ;
   this.AV9cAcervoSubtitulo = "" ;
   this.AV10cAcervoDataAquisicao = gx.date.nullDate() ;
   this.AV11cAcervoDataBaixa = gx.date.nullDate() ;
   this.AV12cAcervoExemplar = 0 ;
   this.AV13pAcervoEmpresaId = "" ;
   this.AV14pAcervoId = 0 ;
   this.A47AcervoSubtitulo = "" ;
   this.AV5LinkSelection = "" ;
   this.A3082AcervoEmpresaId = "" ;
   this.A39AcervoId = 0 ;
   this.A40AcervoTitulo = "" ;
   this.A112AcervoDataAquisicao = gx.date.nullDate() ;
   this.A113AcervoDataBaixa = gx.date.nullDate() ;
   this.A114AcervoExemplar = 0 ;
   this.A115AcervoVolume = 0 ;
   this.A116AcervoEdicao = 0 ;
   this.Events = {"e131ha2_client": ["ENTER", true] ,"e141ha1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAcervoEmpresaId',fld:'vCACERVOEMPRESAID'},{av:'AV7cAcervoId',fld:'vCACERVOID'},{av:'AV8cAcervoTitulo',fld:'vCACERVOTITULO'},{av:'AV9cAcervoSubtitulo',fld:'vCACERVOSUBTITULO'},{av:'AV10cAcervoDataAquisicao',fld:'vCACERVODATAAQUISICAO'},{av:'AV11cAcervoDataBaixa',fld:'vCACERVODATABAIXA'},{av:'AV12cAcervoExemplar',fld:'vCACERVOEXEMPLAR'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A3082AcervoEmpresaId',fld:'ACERVOEMPRESAID'},{av:'A39AcervoId',fld:'ACERVOID'}],[{av:'AV13pAcervoEmpresaId',fld:'vPACERVOEMPRESAID'},{av:'AV14pAcervoId',fld:'vPACERVOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAcervoEmpresaId',fld:'vCACERVOEMPRESAID'},{av:'AV7cAcervoId',fld:'vCACERVOID'},{av:'AV8cAcervoTitulo',fld:'vCACERVOTITULO'},{av:'AV9cAcervoSubtitulo',fld:'vCACERVOSUBTITULO'},{av:'AV10cAcervoDataAquisicao',fld:'vCACERVODATAAQUISICAO'},{av:'AV11cAcervoDataBaixa',fld:'vCACERVODATABAIXA'},{av:'AV12cAcervoExemplar',fld:'vCACERVOEXEMPLAR'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAcervoEmpresaId',fld:'vCACERVOEMPRESAID'},{av:'AV7cAcervoId',fld:'vCACERVOID'},{av:'AV8cAcervoTitulo',fld:'vCACERVOTITULO'},{av:'AV9cAcervoSubtitulo',fld:'vCACERVOSUBTITULO'},{av:'AV10cAcervoDataAquisicao',fld:'vCACERVODATAAQUISICAO'},{av:'AV11cAcervoDataBaixa',fld:'vCACERVODATABAIXA'},{av:'AV12cAcervoExemplar',fld:'vCACERVOEXEMPLAR'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAcervoEmpresaId',fld:'vCACERVOEMPRESAID'},{av:'AV7cAcervoId',fld:'vCACERVOID'},{av:'AV8cAcervoTitulo',fld:'vCACERVOTITULO'},{av:'AV9cAcervoSubtitulo',fld:'vCACERVOSUBTITULO'},{av:'AV10cAcervoDataAquisicao',fld:'vCACERVODATAAQUISICAO'},{av:'AV11cAcervoDataBaixa',fld:'vCACERVODATABAIXA'},{av:'AV12cAcervoExemplar',fld:'vCACERVOEXEMPLAR'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAcervoEmpresaId',fld:'vCACERVOEMPRESAID'},{av:'AV7cAcervoId',fld:'vCACERVOID'},{av:'AV8cAcervoTitulo',fld:'vCACERVOTITULO'},{av:'AV9cAcervoSubtitulo',fld:'vCACERVOSUBTITULO'},{av:'AV10cAcervoDataAquisicao',fld:'vCACERVODATAAQUISICAO'},{av:'AV11cAcervoDataBaixa',fld:'vCACERVODATABAIXA'},{av:'AV12cAcervoExemplar',fld:'vCACERVOEXEMPLAR'}],[]];
   this.setVCMap("AV13pAcervoEmpresaId", "vPACERVOEMPRESAID", 0, "char");
   this.setVCMap("AV14pAcervoId", "vPACERVOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0900());
