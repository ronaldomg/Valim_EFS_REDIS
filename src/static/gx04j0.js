/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:27:20.44
*/
gx.evt.autoSkip = false;
gx.define('gx04j0', false, function () {
   this.ServerClass =  "gx04j0" ;
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
      this.AV13pTransacaoAcresDescEmpresaId=gx.fn.getControlValue("vPTRANSACAOACRESDESCEMPRESAID") ;
      this.AV14pTransacaoAcresDescTipoPagRec=gx.fn.getControlValue("vPTRANSACAOACRESDESCTIPOPAGREC") ;
      this.AV15pTransacaoAcresDescId=gx.fn.getControlValue("vPTRANSACAOACRESDESCID") ;
      this.AV16pTipoLancamentoAcresDescEmpresaId=gx.fn.getControlValue("vPTIPOLANCAMENTOACRESDESCEMPRESAID") ;
      this.AV17pTipoLancamentoAcresDescId=gx.fn.getIntegerValue("vPTIPOLANCAMENTOACRESDESCID",'.') ;
   };
   this.Validv_Ctransacaoacresdesctipopagrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCTRANSACAOACRESDESCTIPOPAGREC");
         this.AnyError  = 0;
         if ( ! ( this.AV7cTransacaoAcresDescTipoPagRec == "0" || this.AV7cTransacaoAcresDescTipoPagRec == "P" || this.AV7cTransacaoAcresDescTipoPagRec == "R" || (""==this.AV7cTransacaoAcresDescTipoPagRec) ) )
         {
            try {
               gxballoon.setError("Campo cTransacaoAcresDescTipoPagRec fora do intervalo");
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
   this.e131k42_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141k41_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,60];
   this.GXLastCtrlId =60;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx04j0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1159,53,"TRANSACAOACRESDESCEMPRESAID","Transacao Acres Desc Empresa Id","","TransacaoAcresDescEmpresaId","char",0,"px",10,10,"left",null,[],1159,"TransacaoAcresDescEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(1534,54,"TRANSACAOACRESDESCTIPOPAGREC","Transacao Acres Desc Tipo Pag Rec","TransacaoAcresDescTipoPagRec","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(1189,55,"TRANSACAOACRESDESCID","Transacao Acres Desc Id","","TransacaoAcresDescId","char",0,"px",8,8,"left",null,[],1189,"TransacaoAcresDescId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1267,56,"TIPOLANCAMENTOACRESDESCEMPRESA","Tipo Lancamento Acres Desc Empresa Id","","TipoLancamentoAcresDescEmpresa","char",0,"px",10,10,"left",null,[],1267,"TipoLancamentoAcresDescEmpresa",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1158,57,"TIPOLANCAMENTOACRESDESCID","Tipo Lancamento Acres Desc Id","","TipoLancamentoAcresDescId","int",0,"px",4,4,"right",null,[],1158,"TipoLancamentoAcresDescId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTRANSACAOACRESDESCEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOACRESDESCEMPRESAID",gxz:"ZV6cTransacaoAcresDescEmpresaId",gxold:"OV6cTransacaoAcresDescEmpresaId",gxvar:"AV6cTransacaoAcresDescEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTransacaoAcresDescEmpresaId=Value},v2z:function(Value){gx.O.ZV6cTransacaoAcresDescEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOACRESDESCEMPRESAID",gx.O.AV6cTransacaoAcresDescEmpresaId,0)},c2v:function(){gx.O.AV6cTransacaoAcresDescEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOACRESDESCEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTRANSACAOACRESDESCTIPOPAGREC", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ctransacaoacresdesctipopagrec,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOACRESDESCTIPOPAGREC",gxz:"ZV7cTransacaoAcresDescTipoPagRec",gxold:"OV7cTransacaoAcresDescTipoPagRec",gxvar:"AV7cTransacaoAcresDescTipoPagRec",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV7cTransacaoAcresDescTipoPagRec=Value},v2z:function(Value){gx.O.ZV7cTransacaoAcresDescTipoPagRec=Value},v2c:function(){gx.fn.setComboBoxValue("vCTRANSACAOACRESDESCTIPOPAGREC",gx.O.AV7cTransacaoAcresDescTipoPagRec)},c2v:function(){gx.O.AV7cTransacaoAcresDescTipoPagRec=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOACRESDESCTIPOPAGREC")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTRANSACAOACRESDESCID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOACRESDESCID",gxz:"ZV8cTransacaoAcresDescId",gxold:"OV8cTransacaoAcresDescId",gxvar:"AV8cTransacaoAcresDescId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cTransacaoAcresDescId=Value},v2z:function(Value){gx.O.ZV8cTransacaoAcresDescId=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOACRESDESCID",gx.O.AV8cTransacaoAcresDescId,0)},c2v:function(){gx.O.AV8cTransacaoAcresDescId=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOACRESDESCID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKTIPOLANCAMENTOACRESDESCEMPRESAID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLANCAMENTOACRESDESCEMPRESAID",gxz:"ZV9cTipoLancamentoAcresDescEmpresaId",gxold:"OV9cTipoLancamentoAcresDescEmpresaId",gxvar:"AV9cTipoLancamentoAcresDescEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cTipoLancamentoAcresDescEmpresaId=Value},v2z:function(Value){gx.O.ZV9cTipoLancamentoAcresDescEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCTIPOLANCAMENTOACRESDESCEMPRESAID",gx.O.AV9cTipoLancamentoAcresDescEmpresaId,0)},c2v:function(){gx.O.AV9cTipoLancamentoAcresDescEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOLANCAMENTOACRESDESCEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKTIPOLANCAMENTOACRESDESCID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLANCAMENTOACRESDESCID",gxz:"ZV10cTipoLancamentoAcresDescId",gxold:"OV10cTipoLancamentoAcresDescId",gxvar:"AV10cTipoLancamentoAcresDescId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cTipoLancamentoAcresDescId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cTipoLancamentoAcresDescId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTIPOLANCAMENTOACRESDESCID",gx.O.AV10cTipoLancamentoAcresDescId,0)},c2v:function(){gx.O.AV10cTipoLancamentoAcresDescId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTIPOLANCAMENTOACRESDESCID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKTRANSACAOACRESDESCUSUARIOALT", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOACRESDESCUSUARIOALT",gxz:"ZV11cTransacaoAcresDescUsuarioAlt",gxold:"OV11cTransacaoAcresDescUsuarioAlt",gxvar:"AV11cTransacaoAcresDescUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cTransacaoAcresDescUsuarioAlt=Value},v2z:function(Value){gx.O.ZV11cTransacaoAcresDescUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOACRESDESCUSUARIOALT",gx.O.AV11cTransacaoAcresDescUsuarioAlt,0)},c2v:function(){gx.O.AV11cTransacaoAcresDescUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOACRESDESCUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKTRANSACAOACRESDESCDATAHORAALT", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOACRESDESCDATAHORAALT",gxz:"ZV12cTransacaoAcresDescDataHoraAlt",gxold:"OV12cTransacaoAcresDescDataHoraAlt",gxvar:"AV12cTransacaoAcresDescDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cTransacaoAcresDescDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12cTransacaoAcresDescDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCTRANSACAOACRESDESCDATAHORAALT",gx.O.AV12cTransacaoAcresDescDataHoraAlt,0)},c2v:function(){gx.O.AV12cTransacaoAcresDescDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCTRANSACAOACRESDESCDATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV20Linkselection_GXI)},c2v:function(){gx.O.AV20Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV20Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOACRESDESCEMPRESAID",gxz:"Z1159TransacaoAcresDescEmpresaId",gxold:"O1159TransacaoAcresDescEmpresaId",gxvar:"A1159TransacaoAcresDescEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1159TransacaoAcresDescEmpresaId=Value},v2z:function(Value){gx.O.Z1159TransacaoAcresDescEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOACRESDESCEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A1159TransacaoAcresDescEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1159TransacaoAcresDescEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOACRESDESCEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOACRESDESCTIPOPAGREC",gxz:"Z1534TransacaoAcresDescTipoPagRec",gxold:"O1534TransacaoAcresDescTipoPagRec",gxvar:"A1534TransacaoAcresDescTipoPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1534TransacaoAcresDescTipoPagRec=Value},v2z:function(Value){gx.O.Z1534TransacaoAcresDescTipoPagRec=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TRANSACAOACRESDESCTIPOPAGREC",row || gx.fn.currentGridRowImpl(51),gx.O.A1534TransacaoAcresDescTipoPagRec);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1534TransacaoAcresDescTipoPagRec=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOACRESDESCTIPOPAGREC",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOACRESDESCID",gxz:"Z1189TransacaoAcresDescId",gxold:"O1189TransacaoAcresDescId",gxvar:"A1189TransacaoAcresDescId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1189TransacaoAcresDescId=Value},v2z:function(Value){gx.O.Z1189TransacaoAcresDescId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOACRESDESCID",row || gx.fn.currentGridRowImpl(51),gx.O.A1189TransacaoAcresDescId,0)},c2v:function(){gx.O.A1189TransacaoAcresDescId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOACRESDESCID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOACRESDESCEMPRESA",gxz:"Z1267TipoLancamentoAcresDescEmpresa",gxold:"O1267TipoLancamentoAcresDescEmpresa",gxvar:"A1267TipoLancamentoAcresDescEmpresa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1267TipoLancamentoAcresDescEmpresa=Value},v2z:function(Value){gx.O.Z1267TipoLancamentoAcresDescEmpresa=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOLANCAMENTOACRESDESCEMPRESA",row || gx.fn.currentGridRowImpl(51),gx.O.A1267TipoLancamentoAcresDescEmpresa,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1267TipoLancamentoAcresDescEmpresa=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOLANCAMENTOACRESDESCEMPRESA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOACRESDESCID",gxz:"Z1158TipoLancamentoAcresDescId",gxold:"O1158TipoLancamentoAcresDescId",gxvar:"A1158TipoLancamentoAcresDescId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1158TipoLancamentoAcresDescId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1158TipoLancamentoAcresDescId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOLANCAMENTOACRESDESCID",row || gx.fn.currentGridRowImpl(51),gx.O.A1158TipoLancamentoAcresDescId,0)},c2v:function(){gx.O.A1158TipoLancamentoAcresDescId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOLANCAMENTOACRESDESCID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TABLE4",grid:0};
   this.AV6cTransacaoAcresDescEmpresaId = "" ;
   this.ZV6cTransacaoAcresDescEmpresaId = "" ;
   this.OV6cTransacaoAcresDescEmpresaId = "" ;
   this.AV7cTransacaoAcresDescTipoPagRec = "" ;
   this.ZV7cTransacaoAcresDescTipoPagRec = "" ;
   this.OV7cTransacaoAcresDescTipoPagRec = "" ;
   this.AV8cTransacaoAcresDescId = "" ;
   this.ZV8cTransacaoAcresDescId = "" ;
   this.OV8cTransacaoAcresDescId = "" ;
   this.AV9cTipoLancamentoAcresDescEmpresaId = "" ;
   this.ZV9cTipoLancamentoAcresDescEmpresaId = "" ;
   this.OV9cTipoLancamentoAcresDescEmpresaId = "" ;
   this.AV10cTipoLancamentoAcresDescId = 0 ;
   this.ZV10cTipoLancamentoAcresDescId = 0 ;
   this.OV10cTipoLancamentoAcresDescId = 0 ;
   this.AV11cTransacaoAcresDescUsuarioAlt = "" ;
   this.ZV11cTransacaoAcresDescUsuarioAlt = "" ;
   this.OV11cTransacaoAcresDescUsuarioAlt = "" ;
   this.AV12cTransacaoAcresDescDataHoraAlt = gx.date.nullDate() ;
   this.ZV12cTransacaoAcresDescDataHoraAlt = gx.date.nullDate() ;
   this.OV12cTransacaoAcresDescDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1159TransacaoAcresDescEmpresaId = "" ;
   this.O1159TransacaoAcresDescEmpresaId = "" ;
   this.Z1534TransacaoAcresDescTipoPagRec = "" ;
   this.O1534TransacaoAcresDescTipoPagRec = "" ;
   this.Z1189TransacaoAcresDescId = "" ;
   this.O1189TransacaoAcresDescId = "" ;
   this.Z1267TipoLancamentoAcresDescEmpresa = "" ;
   this.O1267TipoLancamentoAcresDescEmpresa = "" ;
   this.Z1158TipoLancamentoAcresDescId = 0 ;
   this.O1158TipoLancamentoAcresDescId = 0 ;
   this.AV6cTransacaoAcresDescEmpresaId = "" ;
   this.AV7cTransacaoAcresDescTipoPagRec = "" ;
   this.AV8cTransacaoAcresDescId = "" ;
   this.AV9cTipoLancamentoAcresDescEmpresaId = "" ;
   this.AV10cTipoLancamentoAcresDescId = 0 ;
   this.AV11cTransacaoAcresDescUsuarioAlt = "" ;
   this.AV12cTransacaoAcresDescDataHoraAlt = gx.date.nullDate() ;
   this.AV13pTransacaoAcresDescEmpresaId = "" ;
   this.AV14pTransacaoAcresDescTipoPagRec = "" ;
   this.AV15pTransacaoAcresDescId = "" ;
   this.AV16pTipoLancamentoAcresDescEmpresaId = "" ;
   this.AV17pTipoLancamentoAcresDescId = 0 ;
   this.A1556TransacaoAcresDescDataHoraAlt = gx.date.nullDate() ;
   this.A1555TransacaoAcresDescUsuarioAlt = "" ;
   this.AV5LinkSelection = "" ;
   this.A1159TransacaoAcresDescEmpresaId = "" ;
   this.A1534TransacaoAcresDescTipoPagRec = "" ;
   this.A1189TransacaoAcresDescId = "" ;
   this.A1267TipoLancamentoAcresDescEmpresa = "" ;
   this.A1158TipoLancamentoAcresDescId = 0 ;
   this.Events = {"e131k42_client": ["ENTER", true] ,"e141k41_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoAcresDescEmpresaId',fld:'vCTRANSACAOACRESDESCEMPRESAID'},{av:'AV7cTransacaoAcresDescTipoPagRec',fld:'vCTRANSACAOACRESDESCTIPOPAGREC'},{av:'AV8cTransacaoAcresDescId',fld:'vCTRANSACAOACRESDESCID'},{av:'AV9cTipoLancamentoAcresDescEmpresaId',fld:'vCTIPOLANCAMENTOACRESDESCEMPRESAID'},{av:'AV10cTipoLancamentoAcresDescId',fld:'vCTIPOLANCAMENTOACRESDESCID'},{av:'AV11cTransacaoAcresDescUsuarioAlt',fld:'vCTRANSACAOACRESDESCUSUARIOALT'},{av:'AV12cTransacaoAcresDescDataHoraAlt',fld:'vCTRANSACAOACRESDESCDATAHORAALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1159TransacaoAcresDescEmpresaId',fld:'TRANSACAOACRESDESCEMPRESAID'},{av:'A1534TransacaoAcresDescTipoPagRec',fld:'TRANSACAOACRESDESCTIPOPAGREC'},{av:'A1189TransacaoAcresDescId',fld:'TRANSACAOACRESDESCID'},{av:'A1267TipoLancamentoAcresDescEmpresa',fld:'TIPOLANCAMENTOACRESDESCEMPRESA'},{av:'A1158TipoLancamentoAcresDescId',fld:'TIPOLANCAMENTOACRESDESCID'}],[{av:'AV13pTransacaoAcresDescEmpresaId',fld:'vPTRANSACAOACRESDESCEMPRESAID'},{av:'AV14pTransacaoAcresDescTipoPagRec',fld:'vPTRANSACAOACRESDESCTIPOPAGREC'},{av:'AV15pTransacaoAcresDescId',fld:'vPTRANSACAOACRESDESCID'},{av:'AV16pTipoLancamentoAcresDescEmpresaId',fld:'vPTIPOLANCAMENTOACRESDESCEMPRESAID'},{av:'AV17pTipoLancamentoAcresDescId',fld:'vPTIPOLANCAMENTOACRESDESCID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoAcresDescEmpresaId',fld:'vCTRANSACAOACRESDESCEMPRESAID'},{av:'AV7cTransacaoAcresDescTipoPagRec',fld:'vCTRANSACAOACRESDESCTIPOPAGREC'},{av:'AV8cTransacaoAcresDescId',fld:'vCTRANSACAOACRESDESCID'},{av:'AV9cTipoLancamentoAcresDescEmpresaId',fld:'vCTIPOLANCAMENTOACRESDESCEMPRESAID'},{av:'AV10cTipoLancamentoAcresDescId',fld:'vCTIPOLANCAMENTOACRESDESCID'},{av:'AV11cTransacaoAcresDescUsuarioAlt',fld:'vCTRANSACAOACRESDESCUSUARIOALT'},{av:'AV12cTransacaoAcresDescDataHoraAlt',fld:'vCTRANSACAOACRESDESCDATAHORAALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoAcresDescEmpresaId',fld:'vCTRANSACAOACRESDESCEMPRESAID'},{av:'AV7cTransacaoAcresDescTipoPagRec',fld:'vCTRANSACAOACRESDESCTIPOPAGREC'},{av:'AV8cTransacaoAcresDescId',fld:'vCTRANSACAOACRESDESCID'},{av:'AV9cTipoLancamentoAcresDescEmpresaId',fld:'vCTIPOLANCAMENTOACRESDESCEMPRESAID'},{av:'AV10cTipoLancamentoAcresDescId',fld:'vCTIPOLANCAMENTOACRESDESCID'},{av:'AV11cTransacaoAcresDescUsuarioAlt',fld:'vCTRANSACAOACRESDESCUSUARIOALT'},{av:'AV12cTransacaoAcresDescDataHoraAlt',fld:'vCTRANSACAOACRESDESCDATAHORAALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoAcresDescEmpresaId',fld:'vCTRANSACAOACRESDESCEMPRESAID'},{av:'AV7cTransacaoAcresDescTipoPagRec',fld:'vCTRANSACAOACRESDESCTIPOPAGREC'},{av:'AV8cTransacaoAcresDescId',fld:'vCTRANSACAOACRESDESCID'},{av:'AV9cTipoLancamentoAcresDescEmpresaId',fld:'vCTIPOLANCAMENTOACRESDESCEMPRESAID'},{av:'AV10cTipoLancamentoAcresDescId',fld:'vCTIPOLANCAMENTOACRESDESCID'},{av:'AV11cTransacaoAcresDescUsuarioAlt',fld:'vCTRANSACAOACRESDESCUSUARIOALT'},{av:'AV12cTransacaoAcresDescDataHoraAlt',fld:'vCTRANSACAOACRESDESCDATAHORAALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoAcresDescEmpresaId',fld:'vCTRANSACAOACRESDESCEMPRESAID'},{av:'AV7cTransacaoAcresDescTipoPagRec',fld:'vCTRANSACAOACRESDESCTIPOPAGREC'},{av:'AV8cTransacaoAcresDescId',fld:'vCTRANSACAOACRESDESCID'},{av:'AV9cTipoLancamentoAcresDescEmpresaId',fld:'vCTIPOLANCAMENTOACRESDESCEMPRESAID'},{av:'AV10cTipoLancamentoAcresDescId',fld:'vCTIPOLANCAMENTOACRESDESCID'},{av:'AV11cTransacaoAcresDescUsuarioAlt',fld:'vCTRANSACAOACRESDESCUSUARIOALT'},{av:'AV12cTransacaoAcresDescDataHoraAlt',fld:'vCTRANSACAOACRESDESCDATAHORAALT'}],[]];
   this.setVCMap("AV13pTransacaoAcresDescEmpresaId", "vPTRANSACAOACRESDESCEMPRESAID", 0, "char");
   this.setVCMap("AV14pTransacaoAcresDescTipoPagRec", "vPTRANSACAOACRESDESCTIPOPAGREC", 0, "char");
   this.setVCMap("AV15pTransacaoAcresDescId", "vPTRANSACAOACRESDESCID", 0, "char");
   this.setVCMap("AV16pTipoLancamentoAcresDescEmpresaId", "vPTIPOLANCAMENTOACRESDESCEMPRESAID", 0, "char");
   this.setVCMap("AV17pTipoLancamentoAcresDescId", "vPTIPOLANCAMENTOACRESDESCID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx04j0());
