/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:7:51.53
*/
gx.evt.autoSkip = false;
gx.define('hacrescimodesconto', false, function () {
   this.ServerClass =  "hacrescimodesconto" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV27TransacaoPagRecId=gx.fn.getControlValue("vTRANSACAOPAGRECID") ;
      this.AV30TipoPagReg=gx.fn.getControlValue("vTIPOPAGREG") ;
      this.AV33SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.Valid_Tipolancamentoacresdescid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(46) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("TIPOLANCAMENTOACRESDESCID", gx.fn.currentGridRowImpl(46));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Transacaoacresdescid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(46) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("TRANSACAOACRESDESCID", gx.fn.currentGridRowImpl(46));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Transacaoacresdesctipopagrec=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(46) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("TRANSACAOACRESDESCTIPOPAGREC", gx.fn.currentGridRowImpl(46));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e119j2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e129j2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e209j2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e219j2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e229j2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e169j2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e139j2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e149j2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e159j2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e239j2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e249j2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e259j2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,26,29,31,33,35,37,40,42,43,47,48,49,50,51,52,53,54,55,56,63];
   this.GXLastCtrlId =63;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hacrescimodesconto",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1158,47,"TIPOLANCAMENTOACRESDESCID","","","TipoLancamentoAcresDescId","int",0,"px",4,4,"right",null,[],1158,"TipoLancamentoAcresDescId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1260,48,"TIPOLANCAMENTOACRESDESCDESCRIC","","","TipoLancamentoAcresDescDescric","svchar",0,"px",25,25,"left",null,[],1260,"TipoLancamentoAcresDescDescric",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1239,49,"ACRESCIMODESCONTOPERCENTUAL","","","AcrescimoDescontoPercentual","decimal",0,"px",6,6,"right",null,[],1239,"AcrescimoDescontoPercentual",false,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Acrescimodescontopercentual",50,"vACRESCIMODESCONTOPERCENTUAL","Percentual","","AcrescimoDescontoPercentual","svchar",0,"px",9,9,"left",null,[],"Acrescimodescontopercentual","AcrescimoDescontoPercentual",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",51,0,"px",17,"px","e209j2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",52,0,"px",17,"px","e219j2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",53,0,"px",17,"px","e229j2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(1147,54,"TRANSACAOACRESDESCDESCRICAO","Transacao Acres Desc Descricao","","TransacaoAcresDescDescricao","svchar",0,"px",40,40,"left",null,[],1147,"TransacaoAcresDescDescricao",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1189,55,"TRANSACAOACRESDESCID","Transacao Acres Desc Id","","TransacaoAcresDescId","char",0,"px",8,8,"left",null,[],1189,"TransacaoAcresDescId",false,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(1534,56,"TRANSACAOACRESDESCTIPOPAGREC","Transacao Acres Desc Tipo Pag Rec","TransacaoAcresDescTipoPagRec","char",null,0,false,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE1",grid:0};
   GXValidFnc[16]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOPAGRECDESCRICAO",gxz:"ZV28TransacaoPagRecDescricao",gxold:"OV28TransacaoPagRecDescricao",gxvar:"AV28TransacaoPagRecDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TransacaoPagRecDescricao=Value},v2z:function(Value){gx.O.ZV28TransacaoPagRecDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOPAGRECDESCRICAO",gx.O.AV28TransacaoPagRecDescricao,0)},c2v:function(){gx.O.AV28TransacaoPagRecDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOPAGRECDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOPAGRECTIPODESC",gxz:"ZV29TransacaoPagRecTipoDesc",gxold:"OV29TransacaoPagRecTipoDesc",gxvar:"AV29TransacaoPagRecTipoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29TransacaoPagRecTipoDesc=Value},v2z:function(Value){gx.O.ZV29TransacaoPagRecTipoDesc=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOPAGRECTIPODESC",gx.O.AV29TransacaoPagRecTipoDesc,0)},c2v:function(){gx.O.AV29TransacaoPagRecTipoDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOPAGRECTIPODESC")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE6",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNHELP",grid:0};
   GXValidFnc[37]={fld:"TABLE5",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:this.Valid_Tipolancamentoacresdescid,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOACRESDESCID",gxz:"Z1158TipoLancamentoAcresDescId",gxold:"O1158TipoLancamentoAcresDescId",gxvar:"A1158TipoLancamentoAcresDescId",ucs:[],op:[48,54],ip:[48,54,47,55,56],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1158TipoLancamentoAcresDescId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1158TipoLancamentoAcresDescId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOLANCAMENTOACRESDESCID",row || gx.fn.currentGridRowImpl(46),gx.O.A1158TipoLancamentoAcresDescId,0)},c2v:function(){gx.O.A1158TipoLancamentoAcresDescId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOLANCAMENTOACRESDESCID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOACRESDESCDESCRIC",gxz:"Z1260TipoLancamentoAcresDescDescric",gxold:"O1260TipoLancamentoAcresDescDescric",gxvar:"A1260TipoLancamentoAcresDescDescric",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1260TipoLancamentoAcresDescDescric=Value},v2z:function(Value){gx.O.Z1260TipoLancamentoAcresDescDescric=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOLANCAMENTOACRESDESCDESCRIC",row || gx.fn.currentGridRowImpl(46),gx.O.A1260TipoLancamentoAcresDescDescric,0)},c2v:function(){gx.O.A1260TipoLancamentoAcresDescDescric=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOLANCAMENTOACRESDESCDESCRIC",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACRESCIMODESCONTOPERCENTUAL",gxz:"Z1239AcrescimoDescontoPercentual",gxold:"O1239AcrescimoDescontoPercentual",gxvar:"A1239AcrescimoDescontoPercentual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1239AcrescimoDescontoPercentual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1239AcrescimoDescontoPercentual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ACRESCIMODESCONTOPERCENTUAL",row || gx.fn.currentGridRowImpl(46),gx.O.A1239AcrescimoDescontoPercentual,2,',')},c2v:function(){gx.O.A1239AcrescimoDescontoPercentual=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ACRESCIMODESCONTOPERCENTUAL",row || gx.fn.currentGridRowImpl(46),'.',',')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:9,dec:0,sign:false,ro:0,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vACRESCIMODESCONTOPERCENTUAL",gxz:"ZV31AcrescimoDescontoPercentual",gxold:"OV31AcrescimoDescontoPercentual",gxvar:"AV31AcrescimoDescontoPercentual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV31AcrescimoDescontoPercentual=Value},v2z:function(Value){gx.O.ZV31AcrescimoDescontoPercentual=Value},v2c:function(row){gx.fn.setGridControlValue("vACRESCIMODESCONTOPERCENTUAL",row || gx.fn.currentGridRowImpl(46),gx.O.AV31AcrescimoDescontoPercentual,0)},c2v:function(){gx.O.AV31AcrescimoDescontoPercentual=this.val()},val:function(row){return gx.fn.getGridControlValue("vACRESCIMODESCONTOPERCENTUAL",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(46),gx.O.AV7bmpAlt,gx.O.AV38Bmpalt_GXI)},c2v:function(){gx.O.AV38Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV38Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46),gx.O.AV8bmpExc,gx.O.AV39Bmpexc_GXI)},c2v:function(){gx.O.AV39Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV39Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(46),gx.O.AV16bmpCon,gx.O.AV40Bmpcon_GXI)},c2v:function(){gx.O.AV40Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV40Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOACRESDESCDESCRICAO",gxz:"Z1147TransacaoAcresDescDescricao",gxold:"O1147TransacaoAcresDescDescricao",gxvar:"A1147TransacaoAcresDescDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1147TransacaoAcresDescDescricao=Value},v2z:function(Value){gx.O.Z1147TransacaoAcresDescDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOACRESDESCDESCRICAO",row || gx.fn.currentGridRowImpl(46),gx.O.A1147TransacaoAcresDescDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1147TransacaoAcresDescDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOACRESDESCDESCRICAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:this.Valid_Transacaoacresdescid,isvalid:null,rgrid:[],fld:"TRANSACAOACRESDESCID",gxz:"Z1189TransacaoAcresDescId",gxold:"O1189TransacaoAcresDescId",gxvar:"A1189TransacaoAcresDescId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1189TransacaoAcresDescId=Value},v2z:function(Value){gx.O.Z1189TransacaoAcresDescId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOACRESDESCID",row || gx.fn.currentGridRowImpl(46),gx.O.A1189TransacaoAcresDescId,0)},c2v:function(){gx.O.A1189TransacaoAcresDescId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOACRESDESCID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:this.Valid_Transacaoacresdesctipopagrec,isvalid:null,rgrid:[],fld:"TRANSACAOACRESDESCTIPOPAGREC",gxz:"Z1534TransacaoAcresDescTipoPagRec",gxold:"O1534TransacaoAcresDescTipoPagRec",gxvar:"A1534TransacaoAcresDescTipoPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1534TransacaoAcresDescTipoPagRec=Value},v2z:function(Value){gx.O.Z1534TransacaoAcresDescTipoPagRec=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TRANSACAOACRESDESCTIPOPAGREC",row || gx.fn.currentGridRowImpl(46),gx.O.A1534TransacaoAcresDescTipoPagRec);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1534TransacaoAcresDescTipoPagRec=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOACRESDESCTIPOPAGREC",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV28TransacaoPagRecDescricao = "" ;
   this.ZV28TransacaoPagRecDescricao = "" ;
   this.OV28TransacaoPagRecDescricao = "" ;
   this.AV29TransacaoPagRecTipoDesc = "" ;
   this.ZV29TransacaoPagRecTipoDesc = "" ;
   this.OV29TransacaoPagRecTipoDesc = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1158TipoLancamentoAcresDescId = 0 ;
   this.O1158TipoLancamentoAcresDescId = 0 ;
   this.Z1260TipoLancamentoAcresDescDescric = "" ;
   this.O1260TipoLancamentoAcresDescDescric = "" ;
   this.Z1239AcrescimoDescontoPercentual = 0 ;
   this.O1239AcrescimoDescontoPercentual = 0 ;
   this.ZV31AcrescimoDescontoPercentual = "" ;
   this.OV31AcrescimoDescontoPercentual = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z1147TransacaoAcresDescDescricao = "" ;
   this.O1147TransacaoAcresDescDescricao = "" ;
   this.Z1189TransacaoAcresDescId = "" ;
   this.O1189TransacaoAcresDescId = "" ;
   this.Z1534TransacaoAcresDescTipoPagRec = "" ;
   this.O1534TransacaoAcresDescTipoPagRec = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV28TransacaoPagRecDescricao = "" ;
   this.AV29TransacaoPagRecTipoDesc = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV27TransacaoPagRecId = "" ;
   this.AV30TipoPagReg = "" ;
   this.A1267TipoLancamentoAcresDescEmpresa = "" ;
   this.A1159TransacaoAcresDescEmpresaId = "" ;
   this.A1158TipoLancamentoAcresDescId = 0 ;
   this.A1260TipoLancamentoAcresDescDescric = "" ;
   this.A1239AcrescimoDescontoPercentual = 0 ;
   this.AV31AcrescimoDescontoPercentual = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A1147TransacaoAcresDescDescricao = "" ;
   this.A1189TransacaoAcresDescId = "" ;
   this.A1534TransacaoAcresDescTipoPagRec = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV33SnRecuperaFiltro = "" ;
   this.Events = {"e119j2_client": ["'ANTERIOR'", true] ,"e129j2_client": ["'PROXIMO'", true] ,"e209j2_client": ["'ALTERAR'", true] ,"e219j2_client": ["'EXCLUIR'", true] ,"e229j2_client": ["'CONSULTAR'", true] ,"e169j2_client": ["VPAGINA.CLICK", true] ,"e139j2_client": ["'NOVO'", true] ,"e149j2_client": ["'FECHAR'", true] ,"e159j2_client": ["'PROCURAR'", true] ,"e239j2_client": ["'ATUALIZAPAGINA'", true] ,"e249j2_client": ["ENTER", true] ,"e259j2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27TransacaoPagRecId',fld:'vTRANSACAOPAGRECID'},{av:'AV30TipoPagReg',fld:'vTIPOPAGREG'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1239AcrescimoDescontoPercentual',fld:'ACRESCIMODESCONTOPERCENTUAL'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27TransacaoPagRecId',fld:'vTRANSACAOPAGRECID'},{av:'AV30TipoPagReg',fld:'vTIPOPAGREG'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1239AcrescimoDescontoPercentual',fld:'ACRESCIMODESCONTOPERCENTUAL'}],[{ctrl:'TIPOLANCAMENTOACRESDESCID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOLANCAMENTOACRESDESCID","Title")',ctrl:'TIPOLANCAMENTOACRESDESCID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'TIPOLANCAMENTOACRESDESCDESCRIC',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOLANCAMENTOACRESDESCDESCRIC","Title")',ctrl:'TIPOLANCAMENTOACRESDESCDESCRIC',prop:'Title'},{ctrl:'ACRESCIMODESCONTOPERCENTUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ACRESCIMODESCONTOPERCENTUAL","Title")',ctrl:'ACRESCIMODESCONTOPERCENTUAL',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27TransacaoPagRecId',fld:'vTRANSACAOPAGRECID'},{av:'AV30TipoPagReg',fld:'vTIPOPAGREG'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1239AcrescimoDescontoPercentual',fld:'ACRESCIMODESCONTOPERCENTUAL'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27TransacaoPagRecId',fld:'vTRANSACAOPAGRECID'},{av:'AV30TipoPagReg',fld:'vTIPOPAGREG'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1239AcrescimoDescontoPercentual',fld:'ACRESCIMODESCONTOPERCENTUAL'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1239AcrescimoDescontoPercentual',fld:'ACRESCIMODESCONTOPERCENTUAL'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31AcrescimoDescontoPercentual',fld:'vACRESCIMODESCONTOPERCENTUAL'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A1158TipoLancamentoAcresDescId',fld:'TIPOLANCAMENTOACRESDESCID'},{av:'A1534TransacaoAcresDescTipoPagRec',fld:'TRANSACAOACRESDESCTIPOPAGREC'},{av:'A1189TransacaoAcresDescId',fld:'TRANSACAOACRESDESCID'},{av:'A1147TransacaoAcresDescDescricao',fld:'TRANSACAOACRESDESCDESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'A1147TransacaoAcresDescDescricao',fld:'TRANSACAOACRESDESCDESCRICAO'},{av:'A1189TransacaoAcresDescId',fld:'TRANSACAOACRESDESCID'},{av:'A1534TransacaoAcresDescTipoPagRec',fld:'TRANSACAOACRESDESCTIPOPAGREC'},{av:'A1158TipoLancamentoAcresDescId',fld:'TIPOLANCAMENTOACRESDESCID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A1158TipoLancamentoAcresDescId',fld:'TIPOLANCAMENTOACRESDESCID'},{av:'A1534TransacaoAcresDescTipoPagRec',fld:'TRANSACAOACRESDESCTIPOPAGREC'},{av:'A1189TransacaoAcresDescId',fld:'TRANSACAOACRESDESCID'},{av:'A1147TransacaoAcresDescDescricao',fld:'TRANSACAOACRESDESCDESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'A1147TransacaoAcresDescDescricao',fld:'TRANSACAOACRESDESCDESCRICAO'},{av:'A1189TransacaoAcresDescId',fld:'TRANSACAOACRESDESCID'},{av:'A1534TransacaoAcresDescTipoPagRec',fld:'TRANSACAOACRESDESCTIPOPAGREC'},{av:'A1158TipoLancamentoAcresDescId',fld:'TIPOLANCAMENTOACRESDESCID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A1158TipoLancamentoAcresDescId',fld:'TIPOLANCAMENTOACRESDESCID'},{av:'A1534TransacaoAcresDescTipoPagRec',fld:'TRANSACAOACRESDESCTIPOPAGREC'},{av:'A1189TransacaoAcresDescId',fld:'TRANSACAOACRESDESCID'},{av:'A1147TransacaoAcresDescDescricao',fld:'TRANSACAOACRESDESCDESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'A1147TransacaoAcresDescDescricao',fld:'TRANSACAOACRESDESCDESCRICAO'},{av:'A1189TransacaoAcresDescId',fld:'TRANSACAOACRESDESCID'},{av:'A1534TransacaoAcresDescTipoPagRec',fld:'TRANSACAOACRESDESCTIPOPAGREC'},{av:'A1158TipoLancamentoAcresDescId',fld:'TIPOLANCAMENTOACRESDESCID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27TransacaoPagRecId',fld:'vTRANSACAOPAGRECID'},{av:'AV30TipoPagReg',fld:'vTIPOPAGREG'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1239AcrescimoDescontoPercentual',fld:'ACRESCIMODESCONTOPERCENTUAL'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV30TipoPagReg',fld:'vTIPOPAGREG'},{av:'AV27TransacaoPagRecId',fld:'vTRANSACAOPAGRECID'},{av:'AV28TransacaoPagRecDescricao',fld:'vTRANSACAOPAGRECDESCRICAO'}],[{av:'AV28TransacaoPagRecDescricao',fld:'vTRANSACAOPAGRECDESCRICAO'},{av:'AV27TransacaoPagRecId',fld:'vTRANSACAOPAGRECID'},{av:'AV30TipoPagReg',fld:'vTIPOPAGREG'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27TransacaoPagRecId',fld:'vTRANSACAOPAGRECID'},{av:'AV30TipoPagReg',fld:'vTIPOPAGREG'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1239AcrescimoDescontoPercentual',fld:'ACRESCIMODESCONTOPERCENTUAL'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27TransacaoPagRecId',fld:'vTRANSACAOPAGRECID'},{av:'AV30TipoPagReg',fld:'vTIPOPAGREG'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1239AcrescimoDescontoPercentual',fld:'ACRESCIMODESCONTOPERCENTUAL'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV27TransacaoPagRecId", "vTRANSACAOPAGRECID", 0, "char");
   this.setVCMap("AV30TipoPagReg", "vTIPOPAGREG", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV27TransacaoPagRecId", "vTRANSACAOPAGRECID", 0, "char");
   this.setVCMap("AV30TipoPagReg", "vTIPOPAGREG", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[63]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV27TransacaoPagRecId"});
   GridContainer.addRefreshingVar({rfrVar:"AV30TipoPagReg"});
   GridContainer.addRefreshingVar({rfrVar:"AV33SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A1239AcrescimoDescontoPercentual", rfrProp:"Value", gxAttId:"1239"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hacrescimodesconto());
