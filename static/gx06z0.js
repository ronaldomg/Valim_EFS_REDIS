/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:30:29.25
*/
gx.evt.autoSkip = false;
gx.define('gx06z0', false, function () {
   this.ServerClass =  "gx06z0" ;
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
      this.AV13pLancamentoBemEmpresaId=gx.fn.getControlValue("vPLANCAMENTOBEMEMPRESAID") ;
      this.AV14pBemEmpresaId=gx.fn.getControlValue("vPBEMEMPRESAID") ;
      this.AV15pBemCodigo=gx.fn.getIntegerValue("vPBEMCODIGO",'.') ;
      this.AV16pBemSubgrupo=gx.fn.getIntegerValue("vPBEMSUBGRUPO",'.') ;
      this.AV17pLancamentoBemData=gx.fn.getDateValue("vPLANCAMENTOBEMDATA") ;
      this.AV18pLancamentoBemSequencia=gx.fn.getIntegerValue("vPLANCAMENTOBEMSEQUENCIA",'.') ;
   };
   this.Validv_Clancamentobemstcontabil=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLANCAMENTOBEMSTCONTABIL");
         this.AnyError  = 0;
         if ( ! ( this.AV12cLancamentoBemStContabil == "0" || this.AV12cLancamentoBemStContabil == "1" || this.AV12cLancamentoBemStContabil == "2" || this.AV12cLancamentoBemStContabil == "3" || (""==this.AV12cLancamentoBemStContabil) ) )
         {
            try {
               gxballoon.setError("Campo cLancamentoBemStContabil fora do intervalo");
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
   this.e131me2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141me1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,62];
   this.GXLastCtrlId =62;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx06z0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(2412,53,"LANCAMENTOBEMEMPRESAID","Empresa Lançamento Bem","","LancamentoBemEmpresaId","char",0,"px",10,10,"left",null,[],2412,"LancamentoBemEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2261,54,"BEMEMPRESAID","Empresa do HistoricoBem","","BemEmpresaId","char",0,"px",10,10,"left",null,[],2261,"BemEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2262,55,"BEMCODIGO","Código do HistoricoBem","","BemCodigo","int",0,"px",7,7,"right",null,[],2262,"BemCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2318,56,"BEMSUBGRUPO","Subgrupo","","BemSubgrupo","int",0,"px",2,2,"right",null,[],2318,"BemSubgrupo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2413,57,"LANCAMENTOBEMDATA","Data","","LancamentoBemData","date",0,"px",10,10,"right",null,[],2413,"LancamentoBemData",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2414,58,"LANCAMENTOBEMSEQUENCIA","Sequencia","","LancamentoBemSequencia","int",0,"px",4,4,"right",null,[],2414,"LancamentoBemSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addRadioButton(2402,59,"LANCAMENTOBEMSTCONTABIL","Situação Contábil","LancamentoBemStContabil","char",null,false,true,false,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKLANCAMENTOBEMEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLANCAMENTOBEMEMPRESAID",gxz:"ZV6cLancamentoBemEmpresaId",gxold:"OV6cLancamentoBemEmpresaId",gxvar:"AV6cLancamentoBemEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cLancamentoBemEmpresaId=Value},v2z:function(Value){gx.O.ZV6cLancamentoBemEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCLANCAMENTOBEMEMPRESAID",gx.O.AV6cLancamentoBemEmpresaId,0)},c2v:function(){gx.O.AV6cLancamentoBemEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCLANCAMENTOBEMEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKBEMEMPRESAID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBEMEMPRESAID",gxz:"ZV7cBemEmpresaId",gxold:"OV7cBemEmpresaId",gxvar:"AV7cBemEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cBemEmpresaId=Value},v2z:function(Value){gx.O.ZV7cBemEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCBEMEMPRESAID",gx.O.AV7cBemEmpresaId,0)},c2v:function(){gx.O.AV7cBemEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCBEMEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKBEMCODIGO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBEMCODIGO",gxz:"ZV8cBemCodigo",gxold:"OV8cBemCodigo",gxvar:"AV8cBemCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cBemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cBemCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBEMCODIGO",gx.O.AV8cBemCodigo,0)},c2v:function(){gx.O.AV8cBemCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBEMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKBEMSUBGRUPO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBEMSUBGRUPO",gxz:"ZV9cBemSubgrupo",gxold:"OV9cBemSubgrupo",gxvar:"AV9cBemSubgrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cBemSubgrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cBemSubgrupo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBEMSUBGRUPO",gx.O.AV9cBemSubgrupo,0)},c2v:function(){gx.O.AV9cBemSubgrupo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBEMSUBGRUPO",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKLANCAMENTOBEMDATA", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLANCAMENTOBEMDATA",gxz:"ZV10cLancamentoBemData",gxold:"OV10cLancamentoBemData",gxvar:"AV10cLancamentoBemData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cLancamentoBemData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cLancamentoBemData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCLANCAMENTOBEMDATA",gx.O.AV10cLancamentoBemData,0)},c2v:function(){gx.O.AV10cLancamentoBemData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCLANCAMENTOBEMDATA")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKLANCAMENTOBEMSEQUENCIA", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLANCAMENTOBEMSEQUENCIA",gxz:"ZV11cLancamentoBemSequencia",gxold:"OV11cLancamentoBemSequencia",gxvar:"AV11cLancamentoBemSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cLancamentoBemSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cLancamentoBemSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLANCAMENTOBEMSEQUENCIA",gx.O.AV11cLancamentoBemSequencia,0)},c2v:function(){gx.O.AV11cLancamentoBemSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLANCAMENTOBEMSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKLANCAMENTOBEMSTCONTABIL", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Clancamentobemstcontabil,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLANCAMENTOBEMSTCONTABIL",gxz:"ZV12cLancamentoBemStContabil",gxold:"OV12cLancamentoBemStContabil",gxvar:"AV12cLancamentoBemStContabil",ucs:[],op:[44],ip:[44],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV12cLancamentoBemStContabil=Value},v2z:function(Value){gx.O.ZV12cLancamentoBemStContabil=Value},v2c:function(){gx.fn.setRadioValue("vCLANCAMENTOBEMSTCONTABIL",gx.O.AV12cLancamentoBemStContabil)},c2v:function(){gx.O.AV12cLancamentoBemStContabil=this.val()},val:function(){return gx.fn.getControlValue("vCLANCAMENTOBEMSTCONTABIL")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV21Linkselection_GXI)},c2v:function(){gx.O.AV21Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV21Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOBEMEMPRESAID",gxz:"Z2412LancamentoBemEmpresaId",gxold:"O2412LancamentoBemEmpresaId",gxvar:"A2412LancamentoBemEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2412LancamentoBemEmpresaId=Value},v2z:function(Value){gx.O.Z2412LancamentoBemEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOBEMEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A2412LancamentoBemEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2412LancamentoBemEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOBEMEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BEMEMPRESAID",gxz:"Z2261BemEmpresaId",gxold:"O2261BemEmpresaId",gxvar:"A2261BemEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2261BemEmpresaId=Value},v2z:function(Value){gx.O.Z2261BemEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("BEMEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A2261BemEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2261BemEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("BEMEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BEMCODIGO",gxz:"Z2262BemCodigo",gxold:"O2262BemCodigo",gxvar:"A2262BemCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2262BemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2262BemCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BEMCODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A2262BemCodigo,0)},c2v:function(){gx.O.A2262BemCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BEMCODIGO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BEMSUBGRUPO",gxz:"Z2318BemSubgrupo",gxold:"O2318BemSubgrupo",gxvar:"A2318BemSubgrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2318BemSubgrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2318BemSubgrupo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BEMSUBGRUPO",row || gx.fn.currentGridRowImpl(51),gx.O.A2318BemSubgrupo,0)},c2v:function(){gx.O.A2318BemSubgrupo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BEMSUBGRUPO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOBEMDATA",gxz:"Z2413LancamentoBemData",gxold:"O2413LancamentoBemData",gxvar:"A2413LancamentoBemData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2413LancamentoBemData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2413LancamentoBemData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOBEMDATA",row || gx.fn.currentGridRowImpl(51),gx.O.A2413LancamentoBemData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2413LancamentoBemData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("LANCAMENTOBEMDATA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOBEMSEQUENCIA",gxz:"Z2414LancamentoBemSequencia",gxold:"O2414LancamentoBemSequencia",gxvar:"A2414LancamentoBemSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2414LancamentoBemSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2414LancamentoBemSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOBEMSEQUENCIA",row || gx.fn.currentGridRowImpl(51),gx.O.A2414LancamentoBemSequencia,0)},c2v:function(){gx.O.A2414LancamentoBemSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMENTOBEMSEQUENCIA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOBEMSTCONTABIL",gxz:"Z2402LancamentoBemStContabil",gxold:"O2402LancamentoBemStContabil",gxvar:"A2402LancamentoBemStContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",inputType:'text',v2v:function(Value){gx.O.A2402LancamentoBemStContabil=Value},v2z:function(Value){gx.O.Z2402LancamentoBemStContabil=Value},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOBEMSTCONTABIL",row || gx.fn.currentGridRowImpl(51),gx.O.A2402LancamentoBemStContabil,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2402LancamentoBemStContabil=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOBEMSTCONTABIL",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TABLE4",grid:0};
   this.AV6cLancamentoBemEmpresaId = "" ;
   this.ZV6cLancamentoBemEmpresaId = "" ;
   this.OV6cLancamentoBemEmpresaId = "" ;
   this.AV7cBemEmpresaId = "" ;
   this.ZV7cBemEmpresaId = "" ;
   this.OV7cBemEmpresaId = "" ;
   this.AV8cBemCodigo = 0 ;
   this.ZV8cBemCodigo = 0 ;
   this.OV8cBemCodigo = 0 ;
   this.AV9cBemSubgrupo = 0 ;
   this.ZV9cBemSubgrupo = 0 ;
   this.OV9cBemSubgrupo = 0 ;
   this.AV10cLancamentoBemData = gx.date.nullDate() ;
   this.ZV10cLancamentoBemData = gx.date.nullDate() ;
   this.OV10cLancamentoBemData = gx.date.nullDate() ;
   this.AV11cLancamentoBemSequencia = 0 ;
   this.ZV11cLancamentoBemSequencia = 0 ;
   this.OV11cLancamentoBemSequencia = 0 ;
   this.AV12cLancamentoBemStContabil = "" ;
   this.ZV12cLancamentoBemStContabil = "" ;
   this.OV12cLancamentoBemStContabil = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z2412LancamentoBemEmpresaId = "" ;
   this.O2412LancamentoBemEmpresaId = "" ;
   this.Z2261BemEmpresaId = "" ;
   this.O2261BemEmpresaId = "" ;
   this.Z2262BemCodigo = 0 ;
   this.O2262BemCodigo = 0 ;
   this.Z2318BemSubgrupo = 0 ;
   this.O2318BemSubgrupo = 0 ;
   this.Z2413LancamentoBemData = gx.date.nullDate() ;
   this.O2413LancamentoBemData = gx.date.nullDate() ;
   this.Z2414LancamentoBemSequencia = 0 ;
   this.O2414LancamentoBemSequencia = 0 ;
   this.Z2402LancamentoBemStContabil = "" ;
   this.O2402LancamentoBemStContabil = "" ;
   this.AV6cLancamentoBemEmpresaId = "" ;
   this.AV7cBemEmpresaId = "" ;
   this.AV8cBemCodigo = 0 ;
   this.AV9cBemSubgrupo = 0 ;
   this.AV10cLancamentoBemData = gx.date.nullDate() ;
   this.AV11cLancamentoBemSequencia = 0 ;
   this.AV12cLancamentoBemStContabil = "" ;
   this.AV13pLancamentoBemEmpresaId = "" ;
   this.AV14pBemEmpresaId = "" ;
   this.AV15pBemCodigo = 0 ;
   this.AV16pBemSubgrupo = 0 ;
   this.AV17pLancamentoBemData = gx.date.nullDate() ;
   this.AV18pLancamentoBemSequencia = 0 ;
   this.AV5LinkSelection = "" ;
   this.A2412LancamentoBemEmpresaId = "" ;
   this.A2261BemEmpresaId = "" ;
   this.A2262BemCodigo = 0 ;
   this.A2318BemSubgrupo = 0 ;
   this.A2413LancamentoBemData = gx.date.nullDate() ;
   this.A2414LancamentoBemSequencia = 0 ;
   this.A2402LancamentoBemStContabil = "" ;
   this.Events = {"e131me2_client": ["ENTER", true] ,"e141me1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLancamentoBemEmpresaId',fld:'vCLANCAMENTOBEMEMPRESAID'},{av:'AV7cBemEmpresaId',fld:'vCBEMEMPRESAID'},{av:'AV8cBemCodigo',fld:'vCBEMCODIGO'},{av:'AV9cBemSubgrupo',fld:'vCBEMSUBGRUPO'},{av:'AV10cLancamentoBemData',fld:'vCLANCAMENTOBEMDATA'},{av:'AV11cLancamentoBemSequencia',fld:'vCLANCAMENTOBEMSEQUENCIA'},{av:'AV12cLancamentoBemStContabil',fld:'vCLANCAMENTOBEMSTCONTABIL'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A2412LancamentoBemEmpresaId',fld:'LANCAMENTOBEMEMPRESAID'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2413LancamentoBemData',fld:'LANCAMENTOBEMDATA'},{av:'A2414LancamentoBemSequencia',fld:'LANCAMENTOBEMSEQUENCIA'}],[{av:'AV13pLancamentoBemEmpresaId',fld:'vPLANCAMENTOBEMEMPRESAID'},{av:'AV14pBemEmpresaId',fld:'vPBEMEMPRESAID'},{av:'AV15pBemCodigo',fld:'vPBEMCODIGO'},{av:'AV16pBemSubgrupo',fld:'vPBEMSUBGRUPO'},{av:'AV17pLancamentoBemData',fld:'vPLANCAMENTOBEMDATA'},{av:'AV18pLancamentoBemSequencia',fld:'vPLANCAMENTOBEMSEQUENCIA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLancamentoBemEmpresaId',fld:'vCLANCAMENTOBEMEMPRESAID'},{av:'AV7cBemEmpresaId',fld:'vCBEMEMPRESAID'},{av:'AV8cBemCodigo',fld:'vCBEMCODIGO'},{av:'AV9cBemSubgrupo',fld:'vCBEMSUBGRUPO'},{av:'AV10cLancamentoBemData',fld:'vCLANCAMENTOBEMDATA'},{av:'AV11cLancamentoBemSequencia',fld:'vCLANCAMENTOBEMSEQUENCIA'},{av:'AV12cLancamentoBemStContabil',fld:'vCLANCAMENTOBEMSTCONTABIL'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLancamentoBemEmpresaId',fld:'vCLANCAMENTOBEMEMPRESAID'},{av:'AV7cBemEmpresaId',fld:'vCBEMEMPRESAID'},{av:'AV8cBemCodigo',fld:'vCBEMCODIGO'},{av:'AV9cBemSubgrupo',fld:'vCBEMSUBGRUPO'},{av:'AV10cLancamentoBemData',fld:'vCLANCAMENTOBEMDATA'},{av:'AV11cLancamentoBemSequencia',fld:'vCLANCAMENTOBEMSEQUENCIA'},{av:'AV12cLancamentoBemStContabil',fld:'vCLANCAMENTOBEMSTCONTABIL'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLancamentoBemEmpresaId',fld:'vCLANCAMENTOBEMEMPRESAID'},{av:'AV7cBemEmpresaId',fld:'vCBEMEMPRESAID'},{av:'AV8cBemCodigo',fld:'vCBEMCODIGO'},{av:'AV9cBemSubgrupo',fld:'vCBEMSUBGRUPO'},{av:'AV10cLancamentoBemData',fld:'vCLANCAMENTOBEMDATA'},{av:'AV11cLancamentoBemSequencia',fld:'vCLANCAMENTOBEMSEQUENCIA'},{av:'AV12cLancamentoBemStContabil',fld:'vCLANCAMENTOBEMSTCONTABIL'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLancamentoBemEmpresaId',fld:'vCLANCAMENTOBEMEMPRESAID'},{av:'AV7cBemEmpresaId',fld:'vCBEMEMPRESAID'},{av:'AV8cBemCodigo',fld:'vCBEMCODIGO'},{av:'AV9cBemSubgrupo',fld:'vCBEMSUBGRUPO'},{av:'AV10cLancamentoBemData',fld:'vCLANCAMENTOBEMDATA'},{av:'AV11cLancamentoBemSequencia',fld:'vCLANCAMENTOBEMSEQUENCIA'},{av:'AV12cLancamentoBemStContabil',fld:'vCLANCAMENTOBEMSTCONTABIL'}],[]];
   this.setVCMap("AV13pLancamentoBemEmpresaId", "vPLANCAMENTOBEMEMPRESAID", 0, "char");
   this.setVCMap("AV14pBemEmpresaId", "vPBEMEMPRESAID", 0, "char");
   this.setVCMap("AV15pBemCodigo", "vPBEMCODIGO", 0, "int");
   this.setVCMap("AV16pBemSubgrupo", "vPBEMSUBGRUPO", 0, "int");
   this.setVCMap("AV17pLancamentoBemData", "vPLANCAMENTOBEMDATA", 0, "date");
   this.setVCMap("AV18pLancamentoBemSequencia", "vPLANCAMENTOBEMSEQUENCIA", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx06z0());
