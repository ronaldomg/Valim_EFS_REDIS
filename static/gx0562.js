/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:31:54.38
*/
gx.evt.autoSkip = false;
gx.define('gx0562', false, function () {
   this.ServerClass =  "gx0562" ;
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
      this.AV11pContaPagRecEmpresaId=gx.fn.getControlValue("vPCONTAPAGRECEMPRESAID") ;
      this.AV12pContaPagRecNumero=gx.fn.getIntegerValue("vPCONTAPAGRECNUMERO",'.') ;
      this.AV13pContaLancamSequencia=gx.fn.getIntegerValue("vPCONTALANCAMSEQUENCIA",'.') ;
   };
   this.Validv_Ccontalancamstcontabil=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCCONTALANCAMSTCONTABIL");
         this.AnyError  = 0;
         if ( ! ( this.AV7cContaLancamStContabil == "0" || this.AV7cContaLancamStContabil == "1" || this.AV7cContaLancamStContabil == "2" || this.AV7cContaLancamStContabil == "3" || (""==this.AV7cContaLancamStContabil) ) )
         {
            try {
               gxballoon.setError("Campo cContaLancamStContabil fora do intervalo");
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
   this.e131nd2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141nd1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,48,49,50,51,52,53,54,55,58];
   this.GXLastCtrlId =58;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0562",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1803,43,"CONTALANCAMSEQUENCIA","Sequência","","ContaLancamSequencia","int",0,"px",3,3,"right",null,[],1803,"ContaLancamSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addRadioButton(1804,44,"CONTALANCAMSTCONTABIL","Situação Contábil","ContaLancamStContabil","char",null,false,true,false,"");
   Grid1Container.addSingleLineEdit(1805,45,"CONTALANCAMDATA","Data","","ContaLancamData","date",0,"px",10,10,"right",null,[],1805,"ContaLancamData",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1806,46,"CONTALANCAMHORA","Hora","","ContaLancamHora","char",0,"px",5,5,"left",null,[],1806,"ContaLancamHora",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1807,47,"CONTALANCAMVALOR","Valor","","ContaLancamValor","decimal",0,"px",22,22,"right",null,[],1807,"ContaLancamValor",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1782,48,"CONTALANCAMTPLANCAMEMPID","Empresa","","ContaLancamTpLancamEmpId","char",0,"px",10,10,"left",null,[],1782,"ContaLancamTpLancamEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1783,49,"CONTALANCAMTPLANCAMID","Tipo Lançamento","","ContaLancamTpLancamId","int",0,"px",4,4,"right",null,[],1783,"ContaLancamTpLancamId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1785,50,"CONTALANCAMCCONTABILEMPID","Empresa","","ContaLancamCContabilEmpId","char",0,"px",10,10,"left",null,[],1785,"ContaLancamCContabilEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1788,51,"CONTALANCAMTPBAIXAEMPID","Empresa","","ContaLancamTpBaixaEmpId","char",0,"px",10,10,"left",null,[],1788,"ContaLancamTpBaixaEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1789,52,"CONTALANCAMTPBAIXAPAGREC","Pag/Rec","","ContaLancamTpBaixaPagRec","char",0,"px",1,1,"left",null,[],1789,"ContaLancamTpBaixaPagRec",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1790,53,"CONTALANCAMTPBAIXASIGLA","Tipo Baixa","","ContaLancamTpBaixaSigla","char",0,"px",5,5,"left",null,[],1790,"ContaLancamTpBaixaSigla",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1685,54,"CONTAPAGRECEMPRESAID","Empresa","","ContaPagRecEmpresaId","char",0,"px",10,10,"left",null,[],1685,"ContaPagRecEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1686,55,"CONTAPAGRECNUMERO","Número Conta","","ContaPagRecNumero","int",0,"px",8,8,"right",null,[],1686,"ContaPagRecNumero",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCONTALANCAMSEQUENCIA", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTALANCAMSEQUENCIA",gxz:"ZV6cContaLancamSequencia",gxold:"OV6cContaLancamSequencia",gxvar:"AV6cContaLancamSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cContaLancamSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cContaLancamSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCONTALANCAMSEQUENCIA",gx.O.AV6cContaLancamSequencia,0)},c2v:function(){gx.O.AV6cContaLancamSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCONTALANCAMSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCONTALANCAMSTCONTABIL", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ccontalancamstcontabil,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTALANCAMSTCONTABIL",gxz:"ZV7cContaLancamStContabil",gxold:"OV7cContaLancamStContabil",gxvar:"AV7cContaLancamStContabil",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV7cContaLancamStContabil=Value},v2z:function(Value){gx.O.ZV7cContaLancamStContabil=Value},v2c:function(){gx.fn.setRadioValue("vCCONTALANCAMSTCONTABIL",gx.O.AV7cContaLancamStContabil)},c2v:function(){gx.O.AV7cContaLancamStContabil=this.val()},val:function(){return gx.fn.getControlValue("vCCONTALANCAMSTCONTABIL")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCONTALANCAMDATA", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTALANCAMDATA",gxz:"ZV8cContaLancamData",gxold:"OV8cContaLancamData",gxvar:"AV8cContaLancamData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cContaLancamData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8cContaLancamData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCCONTALANCAMDATA",gx.O.AV8cContaLancamData,0)},c2v:function(){gx.O.AV8cContaLancamData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCCONTALANCAMDATA")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCONTALANCAMHORA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTALANCAMHORA",gxz:"ZV9cContaLancamHora",gxold:"OV9cContaLancamHora",gxvar:"AV9cContaLancamHora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cContaLancamHora=Value},v2z:function(Value){gx.O.ZV9cContaLancamHora=Value},v2c:function(){gx.fn.setControlValue("vCCONTALANCAMHORA",gx.O.AV9cContaLancamHora,0)},c2v:function(){gx.O.AV9cContaLancamHora=this.val()},val:function(){return gx.fn.getControlValue("vCCONTALANCAMHORA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCONTALANCAMVALOR", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTALANCAMVALOR",gxz:"ZV10cContaLancamValor",gxold:"OV10cContaLancamValor",gxvar:"AV10cContaLancamValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cContaLancamValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV10cContaLancamValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCCONTALANCAMVALOR",gx.O.AV10cContaLancamValor,2,',')},c2v:function(){gx.O.AV10cContaLancamValor=this.val()},val:function(){return gx.fn.getDecimalValue("vCCONTALANCAMVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMSEQUENCIA",gxz:"Z1803ContaLancamSequencia",gxold:"O1803ContaLancamSequencia",gxvar:"A1803ContaLancamSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1803ContaLancamSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1803ContaLancamSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMSEQUENCIA",row || gx.fn.currentGridRowImpl(41),gx.O.A1803ContaLancamSequencia,0)},c2v:function(){gx.O.A1803ContaLancamSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTALANCAMSEQUENCIA",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMSTCONTABIL",gxz:"Z1804ContaLancamStContabil",gxold:"O1804ContaLancamStContabil",gxvar:"A1804ContaLancamStContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",inputType:'text',v2v:function(Value){gx.O.A1804ContaLancamStContabil=Value},v2z:function(Value){gx.O.Z1804ContaLancamStContabil=Value},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMSTCONTABIL",row || gx.fn.currentGridRowImpl(41),gx.O.A1804ContaLancamStContabil,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1804ContaLancamStContabil=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTALANCAMSTCONTABIL",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMDATA",gxz:"Z1805ContaLancamData",gxold:"O1805ContaLancamData",gxvar:"A1805ContaLancamData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1805ContaLancamData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1805ContaLancamData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMDATA",row || gx.fn.currentGridRowImpl(41),gx.O.A1805ContaLancamData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1805ContaLancamData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTALANCAMDATA",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:5,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMHORA",gxz:"Z1806ContaLancamHora",gxold:"O1806ContaLancamHora",gxvar:"A1806ContaLancamHora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1806ContaLancamHora=Value},v2z:function(Value){gx.O.Z1806ContaLancamHora=Value},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMHORA",row || gx.fn.currentGridRowImpl(41),gx.O.A1806ContaLancamHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1806ContaLancamHora=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTALANCAMHORA",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMVALOR",gxz:"Z1807ContaLancamValor",gxold:"O1807ContaLancamValor",gxvar:"A1807ContaLancamValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1807ContaLancamValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1807ContaLancamValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CONTALANCAMVALOR",row || gx.fn.currentGridRowImpl(41),gx.O.A1807ContaLancamValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1807ContaLancamValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CONTALANCAMVALOR",row || gx.fn.currentGridRowImpl(41),'.',',')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMTPLANCAMEMPID",gxz:"Z1782ContaLancamTpLancamEmpId",gxold:"O1782ContaLancamTpLancamEmpId",gxvar:"A1782ContaLancamTpLancamEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1782ContaLancamTpLancamEmpId=Value},v2z:function(Value){gx.O.Z1782ContaLancamTpLancamEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMTPLANCAMEMPID",row || gx.fn.currentGridRowImpl(41),gx.O.A1782ContaLancamTpLancamEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1782ContaLancamTpLancamEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTALANCAMTPLANCAMEMPID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMTPLANCAMID",gxz:"Z1783ContaLancamTpLancamId",gxold:"O1783ContaLancamTpLancamId",gxvar:"A1783ContaLancamTpLancamId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1783ContaLancamTpLancamId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1783ContaLancamTpLancamId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMTPLANCAMID",row || gx.fn.currentGridRowImpl(41),gx.O.A1783ContaLancamTpLancamId,0)},c2v:function(){gx.O.A1783ContaLancamTpLancamId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTALANCAMTPLANCAMID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMCCONTABILEMPID",gxz:"Z1785ContaLancamCContabilEmpId",gxold:"O1785ContaLancamCContabilEmpId",gxvar:"A1785ContaLancamCContabilEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1785ContaLancamCContabilEmpId=Value},v2z:function(Value){gx.O.Z1785ContaLancamCContabilEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMCCONTABILEMPID",row || gx.fn.currentGridRowImpl(41),gx.O.A1785ContaLancamCContabilEmpId,0)},c2v:function(){gx.O.A1785ContaLancamCContabilEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTALANCAMCCONTABILEMPID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMTPBAIXAEMPID",gxz:"Z1788ContaLancamTpBaixaEmpId",gxold:"O1788ContaLancamTpBaixaEmpId",gxvar:"A1788ContaLancamTpBaixaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1788ContaLancamTpBaixaEmpId=Value},v2z:function(Value){gx.O.Z1788ContaLancamTpBaixaEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMTPBAIXAEMPID",row || gx.fn.currentGridRowImpl(41),gx.O.A1788ContaLancamTpBaixaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1788ContaLancamTpBaixaEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTALANCAMTPBAIXAEMPID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMTPBAIXAPAGREC",gxz:"Z1789ContaLancamTpBaixaPagRec",gxold:"O1789ContaLancamTpBaixaPagRec",gxvar:"A1789ContaLancamTpBaixaPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1789ContaLancamTpBaixaPagRec=Value},v2z:function(Value){gx.O.Z1789ContaLancamTpBaixaPagRec=Value},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMTPBAIXAPAGREC",row || gx.fn.currentGridRowImpl(41),gx.O.A1789ContaLancamTpBaixaPagRec,0)},c2v:function(){gx.O.A1789ContaLancamTpBaixaPagRec=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTALANCAMTPBAIXAPAGREC",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMTPBAIXASIGLA",gxz:"Z1790ContaLancamTpBaixaSigla",gxold:"O1790ContaLancamTpBaixaSigla",gxvar:"A1790ContaLancamTpBaixaSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1790ContaLancamTpBaixaSigla=Value},v2z:function(Value){gx.O.Z1790ContaLancamTpBaixaSigla=Value},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMTPBAIXASIGLA",row || gx.fn.currentGridRowImpl(41),gx.O.A1790ContaLancamTpBaixaSigla,0)},c2v:function(){gx.O.A1790ContaLancamTpBaixaSigla=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTALANCAMTPBAIXASIGLA",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECEMPRESAID",gxz:"Z1685ContaPagRecEmpresaId",gxold:"O1685ContaPagRecEmpresaId",gxvar:"A1685ContaPagRecEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1685ContaPagRecEmpresaId=Value},v2z:function(Value){gx.O.Z1685ContaPagRecEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A1685ContaPagRecEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1685ContaPagRecEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECNUMERO",gxz:"Z1686ContaPagRecNumero",gxold:"O1686ContaPagRecNumero",gxvar:"A1686ContaPagRecNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1686ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1686ContaPagRecNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(41),gx.O.A1686ContaPagRecNumero,0)},c2v:function(){gx.O.A1686ContaPagRecNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TABLE4",grid:0};
   this.AV6cContaLancamSequencia = 0 ;
   this.ZV6cContaLancamSequencia = 0 ;
   this.OV6cContaLancamSequencia = 0 ;
   this.AV7cContaLancamStContabil = "" ;
   this.ZV7cContaLancamStContabil = "" ;
   this.OV7cContaLancamStContabil = "" ;
   this.AV8cContaLancamData = gx.date.nullDate() ;
   this.ZV8cContaLancamData = gx.date.nullDate() ;
   this.OV8cContaLancamData = gx.date.nullDate() ;
   this.AV9cContaLancamHora = "" ;
   this.ZV9cContaLancamHora = "" ;
   this.OV9cContaLancamHora = "" ;
   this.AV10cContaLancamValor = 0 ;
   this.ZV10cContaLancamValor = 0 ;
   this.OV10cContaLancamValor = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1803ContaLancamSequencia = 0 ;
   this.O1803ContaLancamSequencia = 0 ;
   this.Z1804ContaLancamStContabil = "" ;
   this.O1804ContaLancamStContabil = "" ;
   this.Z1805ContaLancamData = gx.date.nullDate() ;
   this.O1805ContaLancamData = gx.date.nullDate() ;
   this.Z1806ContaLancamHora = "" ;
   this.O1806ContaLancamHora = "" ;
   this.Z1807ContaLancamValor = 0 ;
   this.O1807ContaLancamValor = 0 ;
   this.Z1782ContaLancamTpLancamEmpId = "" ;
   this.O1782ContaLancamTpLancamEmpId = "" ;
   this.Z1783ContaLancamTpLancamId = 0 ;
   this.O1783ContaLancamTpLancamId = 0 ;
   this.Z1785ContaLancamCContabilEmpId = "" ;
   this.O1785ContaLancamCContabilEmpId = "" ;
   this.Z1788ContaLancamTpBaixaEmpId = "" ;
   this.O1788ContaLancamTpBaixaEmpId = "" ;
   this.Z1789ContaLancamTpBaixaPagRec = "" ;
   this.O1789ContaLancamTpBaixaPagRec = "" ;
   this.Z1790ContaLancamTpBaixaSigla = "" ;
   this.O1790ContaLancamTpBaixaSigla = "" ;
   this.Z1685ContaPagRecEmpresaId = "" ;
   this.O1685ContaPagRecEmpresaId = "" ;
   this.Z1686ContaPagRecNumero = 0 ;
   this.O1686ContaPagRecNumero = 0 ;
   this.AV6cContaLancamSequencia = 0 ;
   this.AV7cContaLancamStContabil = "" ;
   this.AV8cContaLancamData = gx.date.nullDate() ;
   this.AV9cContaLancamHora = "" ;
   this.AV10cContaLancamValor = 0 ;
   this.AV11pContaPagRecEmpresaId = "" ;
   this.AV12pContaPagRecNumero = 0 ;
   this.AV13pContaLancamSequencia = 0 ;
   this.AV5LinkSelection = "" ;
   this.A1803ContaLancamSequencia = 0 ;
   this.A1804ContaLancamStContabil = "" ;
   this.A1805ContaLancamData = gx.date.nullDate() ;
   this.A1806ContaLancamHora = "" ;
   this.A1807ContaLancamValor = 0 ;
   this.A1782ContaLancamTpLancamEmpId = "" ;
   this.A1783ContaLancamTpLancamId = 0 ;
   this.A1785ContaLancamCContabilEmpId = "" ;
   this.A1788ContaLancamTpBaixaEmpId = "" ;
   this.A1789ContaLancamTpBaixaPagRec = "" ;
   this.A1790ContaLancamTpBaixaSigla = "" ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.Events = {"e131nd2_client": ["ENTER", true] ,"e141nd1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaLancamSequencia',fld:'vCCONTALANCAMSEQUENCIA'},{av:'AV7cContaLancamStContabil',fld:'vCCONTALANCAMSTCONTABIL'},{av:'AV8cContaLancamData',fld:'vCCONTALANCAMDATA'},{av:'AV9cContaLancamHora',fld:'vCCONTALANCAMHORA'},{av:'AV10cContaLancamValor',fld:'vCCONTALANCAMVALOR'},{av:'AV11pContaPagRecEmpresaId',fld:'vPCONTAPAGRECEMPRESAID',hsh:true},{av:'AV12pContaPagRecNumero',fld:'vPCONTAPAGRECNUMERO',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1803ContaLancamSequencia',fld:'CONTALANCAMSEQUENCIA'}],[{av:'AV13pContaLancamSequencia',fld:'vPCONTALANCAMSEQUENCIA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaLancamSequencia',fld:'vCCONTALANCAMSEQUENCIA'},{av:'AV7cContaLancamStContabil',fld:'vCCONTALANCAMSTCONTABIL'},{av:'AV8cContaLancamData',fld:'vCCONTALANCAMDATA'},{av:'AV9cContaLancamHora',fld:'vCCONTALANCAMHORA'},{av:'AV10cContaLancamValor',fld:'vCCONTALANCAMVALOR'},{av:'AV11pContaPagRecEmpresaId',fld:'vPCONTAPAGRECEMPRESAID',hsh:true},{av:'AV12pContaPagRecNumero',fld:'vPCONTAPAGRECNUMERO',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaLancamSequencia',fld:'vCCONTALANCAMSEQUENCIA'},{av:'AV7cContaLancamStContabil',fld:'vCCONTALANCAMSTCONTABIL'},{av:'AV8cContaLancamData',fld:'vCCONTALANCAMDATA'},{av:'AV9cContaLancamHora',fld:'vCCONTALANCAMHORA'},{av:'AV10cContaLancamValor',fld:'vCCONTALANCAMVALOR'},{av:'AV11pContaPagRecEmpresaId',fld:'vPCONTAPAGRECEMPRESAID',hsh:true},{av:'AV12pContaPagRecNumero',fld:'vPCONTAPAGRECNUMERO',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaLancamSequencia',fld:'vCCONTALANCAMSEQUENCIA'},{av:'AV7cContaLancamStContabil',fld:'vCCONTALANCAMSTCONTABIL'},{av:'AV8cContaLancamData',fld:'vCCONTALANCAMDATA'},{av:'AV9cContaLancamHora',fld:'vCCONTALANCAMHORA'},{av:'AV10cContaLancamValor',fld:'vCCONTALANCAMVALOR'},{av:'AV11pContaPagRecEmpresaId',fld:'vPCONTAPAGRECEMPRESAID',hsh:true},{av:'AV12pContaPagRecNumero',fld:'vPCONTAPAGRECNUMERO',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaLancamSequencia',fld:'vCCONTALANCAMSEQUENCIA'},{av:'AV7cContaLancamStContabil',fld:'vCCONTALANCAMSTCONTABIL'},{av:'AV8cContaLancamData',fld:'vCCONTALANCAMDATA'},{av:'AV9cContaLancamHora',fld:'vCCONTALANCAMHORA'},{av:'AV10cContaLancamValor',fld:'vCCONTALANCAMVALOR'},{av:'AV11pContaPagRecEmpresaId',fld:'vPCONTAPAGRECEMPRESAID',hsh:true},{av:'AV12pContaPagRecNumero',fld:'vPCONTAPAGRECNUMERO',hsh:true}],[]];
   this.setVCMap("AV11pContaPagRecEmpresaId", "vPCONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV12pContaPagRecNumero", "vPCONTAPAGRECNUMERO", 0, "int");
   this.setVCMap("AV13pContaLancamSequencia", "vPCONTALANCAMSEQUENCIA", 0, "int");
   this.setVCMap("AV11pContaPagRecEmpresaId", "vPCONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV12pContaPagRecNumero", "vPCONTAPAGRECNUMERO", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar({rfrVar:"AV11pContaPagRecEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV12pContaPagRecNumero"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0562());
