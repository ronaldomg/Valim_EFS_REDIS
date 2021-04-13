/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:43:52.19
*/
gx.evt.autoSkip = false;
gx.define('gx06d0', false, function () {
   this.ServerClass =  "gx06d0" ;
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
      this.AV13pIntFinCblSequencia=gx.fn.getIntegerValue("vPINTFINCBLSEQUENCIA",'.') ;
      this.AV14pIntFinCblSeqItem=gx.fn.getIntegerValue("vPINTFINCBLSEQITEM",'.') ;
   };
   this.e131xq2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141xq1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,60];
   this.GXLastCtrlId =60;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx06d0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(2233,53,"INTFINCBLSEQUENCIA","Int Fin Cbl Sequencia","","IntFinCblSequencia","int",0,"px",8,8,"right",null,[],2233,"IntFinCblSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2234,54,"INTFINCBLSEQITEM","Int Fin Cbl Seq Item","","IntFinCblSeqItem","int",0,"px",8,8,"right",null,[],2234,"IntFinCblSeqItem",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2214,55,"INTFINCBLTIPOREGISTRO","Int Fin Cbl Tipo Registro","Selecionar","IntFinCblTipoRegistro","char",0,"px",1,1,"left",null,[],2214,"IntFinCblTipoRegistro",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2215,56,"INTFINCBLNUMLANCAMENTOCBL","Int Fin Cbl Num Lancamento Cbl","","IntFinCblNumLancamentoCbl","int",0,"px",8,8,"right",null,[],2215,"IntFinCblNumLancamentoCbl",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2218,57,"INTFINCBLDEBITOCREDITO","Int Fin Cbl Debito Credito","","IntFinCblDebitoCredito","char",0,"px",1,1,"left",null,[],2218,"IntFinCblDebitoCredito",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKINTFINCBLSEQUENCIA", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTFINCBLSEQUENCIA",gxz:"ZV6cIntFinCblSequencia",gxold:"OV6cIntFinCblSequencia",gxvar:"AV6cIntFinCblSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cIntFinCblSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cIntFinCblSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCINTFINCBLSEQUENCIA",gx.O.AV6cIntFinCblSequencia,0)},c2v:function(){gx.O.AV6cIntFinCblSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCINTFINCBLSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKINTFINCBLSEQITEM", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTFINCBLSEQITEM",gxz:"ZV7cIntFinCblSeqItem",gxold:"OV7cIntFinCblSeqItem",gxvar:"AV7cIntFinCblSeqItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cIntFinCblSeqItem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cIntFinCblSeqItem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCINTFINCBLSEQITEM",gx.O.AV7cIntFinCblSeqItem,0)},c2v:function(){gx.O.AV7cIntFinCblSeqItem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCINTFINCBLSEQITEM",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKINTFINCBLTIPOREGISTRO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTFINCBLTIPOREGISTRO",gxz:"ZV8cIntFinCblTipoRegistro",gxold:"OV8cIntFinCblTipoRegistro",gxvar:"AV8cIntFinCblTipoRegistro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cIntFinCblTipoRegistro=Value},v2z:function(Value){gx.O.ZV8cIntFinCblTipoRegistro=Value},v2c:function(){gx.fn.setControlValue("vCINTFINCBLTIPOREGISTRO",gx.O.AV8cIntFinCblTipoRegistro,0)},c2v:function(){gx.O.AV8cIntFinCblTipoRegistro=this.val()},val:function(){return gx.fn.getControlValue("vCINTFINCBLTIPOREGISTRO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKINTFINCBLNUMLANCAMENTOCBL", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTFINCBLNUMLANCAMENTOCBL",gxz:"ZV9cIntFinCblNumLancamentoCbl",gxold:"OV9cIntFinCblNumLancamentoCbl",gxvar:"AV9cIntFinCblNumLancamentoCbl",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cIntFinCblNumLancamentoCbl=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cIntFinCblNumLancamentoCbl=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCINTFINCBLNUMLANCAMENTOCBL",gx.O.AV9cIntFinCblNumLancamentoCbl,0)},c2v:function(){gx.O.AV9cIntFinCblNumLancamentoCbl=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCINTFINCBLNUMLANCAMENTOCBL",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKINTFINCBLSEQLANCAMENTOCBL", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTFINCBLSEQLANCAMENTOCBL",gxz:"ZV10cIntFinCblSeqLancamentoCbl",gxold:"OV10cIntFinCblSeqLancamentoCbl",gxvar:"AV10cIntFinCblSeqLancamentoCbl",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cIntFinCblSeqLancamentoCbl=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cIntFinCblSeqLancamentoCbl=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCINTFINCBLSEQLANCAMENTOCBL",gx.O.AV10cIntFinCblSeqLancamentoCbl,0)},c2v:function(){gx.O.AV10cIntFinCblSeqLancamentoCbl=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCINTFINCBLSEQLANCAMENTOCBL",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKINTFINCBLCONTACONTABIL", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTFINCBLCONTACONTABIL",gxz:"ZV11cIntFinCblContaContabil",gxold:"OV11cIntFinCblContaContabil",gxvar:"AV11cIntFinCblContaContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cIntFinCblContaContabil=Value},v2z:function(Value){gx.O.ZV11cIntFinCblContaContabil=Value},v2c:function(){gx.fn.setControlValue("vCINTFINCBLCONTACONTABIL",gx.O.AV11cIntFinCblContaContabil,0)},c2v:function(){gx.O.AV11cIntFinCblContaContabil=this.val()},val:function(){return gx.fn.getControlValue("vCINTFINCBLCONTACONTABIL")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKINTFINCBLDEBITOCREDITO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTFINCBLDEBITOCREDITO",gxz:"ZV12cIntFinCblDebitoCredito",gxold:"OV12cIntFinCblDebitoCredito",gxvar:"AV12cIntFinCblDebitoCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cIntFinCblDebitoCredito=Value},v2z:function(Value){gx.O.ZV12cIntFinCblDebitoCredito=Value},v2c:function(){gx.fn.setControlValue("vCINTFINCBLDEBITOCREDITO",gx.O.AV12cIntFinCblDebitoCredito,0)},c2v:function(){gx.O.AV12cIntFinCblDebitoCredito=this.val()},val:function(){return gx.fn.getControlValue("vCINTFINCBLDEBITOCREDITO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTFINCBLSEQUENCIA",gxz:"Z2233IntFinCblSequencia",gxold:"O2233IntFinCblSequencia",gxvar:"A2233IntFinCblSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2233IntFinCblSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2233IntFinCblSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("INTFINCBLSEQUENCIA",row || gx.fn.currentGridRowImpl(51),gx.O.A2233IntFinCblSequencia,0)},c2v:function(){gx.O.A2233IntFinCblSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("INTFINCBLSEQUENCIA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTFINCBLSEQITEM",gxz:"Z2234IntFinCblSeqItem",gxold:"O2234IntFinCblSeqItem",gxvar:"A2234IntFinCblSeqItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2234IntFinCblSeqItem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2234IntFinCblSeqItem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("INTFINCBLSEQITEM",row || gx.fn.currentGridRowImpl(51),gx.O.A2234IntFinCblSeqItem,0)},c2v:function(){gx.O.A2234IntFinCblSeqItem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("INTFINCBLSEQITEM",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTFINCBLTIPOREGISTRO",gxz:"Z2214IntFinCblTipoRegistro",gxold:"O2214IntFinCblTipoRegistro",gxvar:"A2214IntFinCblTipoRegistro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2214IntFinCblTipoRegistro=Value},v2z:function(Value){gx.O.Z2214IntFinCblTipoRegistro=Value},v2c:function(row){gx.fn.setGridControlValue("INTFINCBLTIPOREGISTRO",row || gx.fn.currentGridRowImpl(51),gx.O.A2214IntFinCblTipoRegistro,0)},c2v:function(){gx.O.A2214IntFinCblTipoRegistro=this.val()},val:function(row){return gx.fn.getGridControlValue("INTFINCBLTIPOREGISTRO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTFINCBLNUMLANCAMENTOCBL",gxz:"Z2215IntFinCblNumLancamentoCbl",gxold:"O2215IntFinCblNumLancamentoCbl",gxvar:"A2215IntFinCblNumLancamentoCbl",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2215IntFinCblNumLancamentoCbl=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2215IntFinCblNumLancamentoCbl=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("INTFINCBLNUMLANCAMENTOCBL",row || gx.fn.currentGridRowImpl(51),gx.O.A2215IntFinCblNumLancamentoCbl,0)},c2v:function(){gx.O.A2215IntFinCblNumLancamentoCbl=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("INTFINCBLNUMLANCAMENTOCBL",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTFINCBLDEBITOCREDITO",gxz:"Z2218IntFinCblDebitoCredito",gxold:"O2218IntFinCblDebitoCredito",gxvar:"A2218IntFinCblDebitoCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2218IntFinCblDebitoCredito=Value},v2z:function(Value){gx.O.Z2218IntFinCblDebitoCredito=Value},v2c:function(row){gx.fn.setGridControlValue("INTFINCBLDEBITOCREDITO",row || gx.fn.currentGridRowImpl(51),gx.O.A2218IntFinCblDebitoCredito,0)},c2v:function(){gx.O.A2218IntFinCblDebitoCredito=this.val()},val:function(row){return gx.fn.getGridControlValue("INTFINCBLDEBITOCREDITO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TABLE4",grid:0};
   this.AV6cIntFinCblSequencia = 0 ;
   this.ZV6cIntFinCblSequencia = 0 ;
   this.OV6cIntFinCblSequencia = 0 ;
   this.AV7cIntFinCblSeqItem = 0 ;
   this.ZV7cIntFinCblSeqItem = 0 ;
   this.OV7cIntFinCblSeqItem = 0 ;
   this.AV8cIntFinCblTipoRegistro = "" ;
   this.ZV8cIntFinCblTipoRegistro = "" ;
   this.OV8cIntFinCblTipoRegistro = "" ;
   this.AV9cIntFinCblNumLancamentoCbl = 0 ;
   this.ZV9cIntFinCblNumLancamentoCbl = 0 ;
   this.OV9cIntFinCblNumLancamentoCbl = 0 ;
   this.AV10cIntFinCblSeqLancamentoCbl = 0 ;
   this.ZV10cIntFinCblSeqLancamentoCbl = 0 ;
   this.OV10cIntFinCblSeqLancamentoCbl = 0 ;
   this.AV11cIntFinCblContaContabil = "" ;
   this.ZV11cIntFinCblContaContabil = "" ;
   this.OV11cIntFinCblContaContabil = "" ;
   this.AV12cIntFinCblDebitoCredito = "" ;
   this.ZV12cIntFinCblDebitoCredito = "" ;
   this.OV12cIntFinCblDebitoCredito = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z2233IntFinCblSequencia = 0 ;
   this.O2233IntFinCblSequencia = 0 ;
   this.Z2234IntFinCblSeqItem = 0 ;
   this.O2234IntFinCblSeqItem = 0 ;
   this.Z2214IntFinCblTipoRegistro = "" ;
   this.O2214IntFinCblTipoRegistro = "" ;
   this.Z2215IntFinCblNumLancamentoCbl = 0 ;
   this.O2215IntFinCblNumLancamentoCbl = 0 ;
   this.Z2218IntFinCblDebitoCredito = "" ;
   this.O2218IntFinCblDebitoCredito = "" ;
   this.AV6cIntFinCblSequencia = 0 ;
   this.AV7cIntFinCblSeqItem = 0 ;
   this.AV8cIntFinCblTipoRegistro = "" ;
   this.AV9cIntFinCblNumLancamentoCbl = 0 ;
   this.AV10cIntFinCblSeqLancamentoCbl = 0 ;
   this.AV11cIntFinCblContaContabil = "" ;
   this.AV12cIntFinCblDebitoCredito = "" ;
   this.AV13pIntFinCblSequencia = 0 ;
   this.AV14pIntFinCblSeqItem = 0 ;
   this.A2217IntFinCblContaContabil = "" ;
   this.A2216IntFinCblSeqLancamentoCbl = 0 ;
   this.AV5LinkSelection = "" ;
   this.A2233IntFinCblSequencia = 0 ;
   this.A2234IntFinCblSeqItem = 0 ;
   this.A2214IntFinCblTipoRegistro = "" ;
   this.A2215IntFinCblNumLancamentoCbl = 0 ;
   this.A2218IntFinCblDebitoCredito = "" ;
   this.Events = {"e131xq2_client": ["ENTER", true] ,"e141xq1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntFinCblSequencia',fld:'vCINTFINCBLSEQUENCIA'},{av:'AV7cIntFinCblSeqItem',fld:'vCINTFINCBLSEQITEM'},{av:'AV8cIntFinCblTipoRegistro',fld:'vCINTFINCBLTIPOREGISTRO'},{av:'AV9cIntFinCblNumLancamentoCbl',fld:'vCINTFINCBLNUMLANCAMENTOCBL'},{av:'AV10cIntFinCblSeqLancamentoCbl',fld:'vCINTFINCBLSEQLANCAMENTOCBL'},{av:'AV11cIntFinCblContaContabil',fld:'vCINTFINCBLCONTACONTABIL'},{av:'AV12cIntFinCblDebitoCredito',fld:'vCINTFINCBLDEBITOCREDITO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A2233IntFinCblSequencia',fld:'INTFINCBLSEQUENCIA'},{av:'A2234IntFinCblSeqItem',fld:'INTFINCBLSEQITEM'}],[{av:'AV13pIntFinCblSequencia',fld:'vPINTFINCBLSEQUENCIA'},{av:'AV14pIntFinCblSeqItem',fld:'vPINTFINCBLSEQITEM'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntFinCblSequencia',fld:'vCINTFINCBLSEQUENCIA'},{av:'AV7cIntFinCblSeqItem',fld:'vCINTFINCBLSEQITEM'},{av:'AV8cIntFinCblTipoRegistro',fld:'vCINTFINCBLTIPOREGISTRO'},{av:'AV9cIntFinCblNumLancamentoCbl',fld:'vCINTFINCBLNUMLANCAMENTOCBL'},{av:'AV10cIntFinCblSeqLancamentoCbl',fld:'vCINTFINCBLSEQLANCAMENTOCBL'},{av:'AV11cIntFinCblContaContabil',fld:'vCINTFINCBLCONTACONTABIL'},{av:'AV12cIntFinCblDebitoCredito',fld:'vCINTFINCBLDEBITOCREDITO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntFinCblSequencia',fld:'vCINTFINCBLSEQUENCIA'},{av:'AV7cIntFinCblSeqItem',fld:'vCINTFINCBLSEQITEM'},{av:'AV8cIntFinCblTipoRegistro',fld:'vCINTFINCBLTIPOREGISTRO'},{av:'AV9cIntFinCblNumLancamentoCbl',fld:'vCINTFINCBLNUMLANCAMENTOCBL'},{av:'AV10cIntFinCblSeqLancamentoCbl',fld:'vCINTFINCBLSEQLANCAMENTOCBL'},{av:'AV11cIntFinCblContaContabil',fld:'vCINTFINCBLCONTACONTABIL'},{av:'AV12cIntFinCblDebitoCredito',fld:'vCINTFINCBLDEBITOCREDITO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntFinCblSequencia',fld:'vCINTFINCBLSEQUENCIA'},{av:'AV7cIntFinCblSeqItem',fld:'vCINTFINCBLSEQITEM'},{av:'AV8cIntFinCblTipoRegistro',fld:'vCINTFINCBLTIPOREGISTRO'},{av:'AV9cIntFinCblNumLancamentoCbl',fld:'vCINTFINCBLNUMLANCAMENTOCBL'},{av:'AV10cIntFinCblSeqLancamentoCbl',fld:'vCINTFINCBLSEQLANCAMENTOCBL'},{av:'AV11cIntFinCblContaContabil',fld:'vCINTFINCBLCONTACONTABIL'},{av:'AV12cIntFinCblDebitoCredito',fld:'vCINTFINCBLDEBITOCREDITO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntFinCblSequencia',fld:'vCINTFINCBLSEQUENCIA'},{av:'AV7cIntFinCblSeqItem',fld:'vCINTFINCBLSEQITEM'},{av:'AV8cIntFinCblTipoRegistro',fld:'vCINTFINCBLTIPOREGISTRO'},{av:'AV9cIntFinCblNumLancamentoCbl',fld:'vCINTFINCBLNUMLANCAMENTOCBL'},{av:'AV10cIntFinCblSeqLancamentoCbl',fld:'vCINTFINCBLSEQLANCAMENTOCBL'},{av:'AV11cIntFinCblContaContabil',fld:'vCINTFINCBLCONTACONTABIL'},{av:'AV12cIntFinCblDebitoCredito',fld:'vCINTFINCBLDEBITOCREDITO'}],[]];
   this.setVCMap("AV13pIntFinCblSequencia", "vPINTFINCBLSEQUENCIA", 0, "int");
   this.setVCMap("AV14pIntFinCblSeqItem", "vPINTFINCBLSEQITEM", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx06d0());
