/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:28:52.45
*/
gx.evt.autoSkip = false;
gx.define('gx0560', false, function () {
   this.ServerClass =  "gx0560" ;
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
      this.AV13pContaPagRecEmpresaId=gx.fn.getControlValue("vPCONTAPAGRECEMPRESAID") ;
      this.AV14pContaPagRecNumero=gx.fn.getIntegerValue("vPCONTAPAGRECNUMERO",'.') ;
      this.AV15pContaLancamSequencia=gx.fn.getIntegerValue("vPCONTALANCAMSEQUENCIA",'.') ;
   };
   this.Validv_Ccontalancamstcontabil=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCCONTALANCAMSTCONTABIL");
         this.AnyError  = 0;
         if ( ! ( this.AV9cContaLancamStContabil == "0" || this.AV9cContaLancamStContabil == "1" || this.AV9cContaLancamStContabil == "2" || this.AV9cContaLancamStContabil == "3" || (""==this.AV9cContaLancamStContabil) ) )
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
   this.e131l92_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141l91_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,61,62,65];
   this.GXLastCtrlId =65;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0560",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1685,53,"CONTAPAGRECEMPRESAID","Empresa","","ContaPagRecEmpresaId","char",0,"px",10,10,"left",null,[],1685,"ContaPagRecEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1686,54,"CONTAPAGRECNUMERO","Número Conta","","ContaPagRecNumero","int",0,"px",8,8,"right",null,[],1686,"ContaPagRecNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1803,55,"CONTALANCAMSEQUENCIA","Sequência","","ContaLancamSequencia","int",0,"px",3,3,"right",null,[],1803,"ContaLancamSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addRadioButton(1804,56,"CONTALANCAMSTCONTABIL","Situação Contábil","ContaLancamStContabil","char",null,false,true,false,"");
   Grid1Container.addSingleLineEdit(1805,57,"CONTALANCAMDATA","Data","","ContaLancamData","date",0,"px",10,10,"right",null,[],1805,"ContaLancamData",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1806,58,"CONTALANCAMHORA","Hora","","ContaLancamHora","char",0,"px",5,5,"left",null,[],1806,"ContaLancamHora",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1807,59,"CONTALANCAMVALOR","Valor","","ContaLancamValor","decimal",0,"px",22,22,"right",null,[],1807,"ContaLancamValor",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1782,60,"CONTALANCAMTPLANCAMEMPID","Empresa","","ContaLancamTpLancamEmpId","char",0,"px",10,10,"left",null,[],1782,"ContaLancamTpLancamEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1783,61,"CONTALANCAMTPLANCAMID","Tipo Lançamento","","ContaLancamTpLancamId","int",0,"px",4,4,"right",null,[],1783,"ContaLancamTpLancamId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1785,62,"CONTALANCAMCCONTABILEMPID","Empresa","","ContaLancamCContabilEmpId","char",0,"px",10,10,"left",null,[],1785,"ContaLancamCContabilEmpId",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCONTAPAGRECEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTAPAGRECEMPRESAID",gxz:"ZV6cContaPagRecEmpresaId",gxold:"OV6cContaPagRecEmpresaId",gxvar:"AV6cContaPagRecEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cContaPagRecEmpresaId=Value},v2z:function(Value){gx.O.ZV6cContaPagRecEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCCONTAPAGRECEMPRESAID",gx.O.AV6cContaPagRecEmpresaId,0)},c2v:function(){gx.O.AV6cContaPagRecEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCCONTAPAGRECEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCONTAPAGRECNUMERO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTAPAGRECNUMERO",gxz:"ZV7cContaPagRecNumero",gxold:"OV7cContaPagRecNumero",gxvar:"AV7cContaPagRecNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cContaPagRecNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCONTAPAGRECNUMERO",gx.O.AV7cContaPagRecNumero,0)},c2v:function(){gx.O.AV7cContaPagRecNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCONTAPAGRECNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCONTALANCAMSEQUENCIA", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTALANCAMSEQUENCIA",gxz:"ZV8cContaLancamSequencia",gxold:"OV8cContaLancamSequencia",gxvar:"AV8cContaLancamSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cContaLancamSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cContaLancamSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCONTALANCAMSEQUENCIA",gx.O.AV8cContaLancamSequencia,0)},c2v:function(){gx.O.AV8cContaLancamSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCONTALANCAMSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCONTALANCAMSTCONTABIL", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ccontalancamstcontabil,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTALANCAMSTCONTABIL",gxz:"ZV9cContaLancamStContabil",gxold:"OV9cContaLancamStContabil",gxvar:"AV9cContaLancamStContabil",ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV9cContaLancamStContabil=Value},v2z:function(Value){gx.O.ZV9cContaLancamStContabil=Value},v2c:function(){gx.fn.setRadioValue("vCCONTALANCAMSTCONTABIL",gx.O.AV9cContaLancamStContabil)},c2v:function(){gx.O.AV9cContaLancamStContabil=this.val()},val:function(){return gx.fn.getControlValue("vCCONTALANCAMSTCONTABIL")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCONTALANCAMDATA", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTALANCAMDATA",gxz:"ZV10cContaLancamData",gxold:"OV10cContaLancamData",gxvar:"AV10cContaLancamData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cContaLancamData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cContaLancamData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCCONTALANCAMDATA",gx.O.AV10cContaLancamData,0)},c2v:function(){gx.O.AV10cContaLancamData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCCONTALANCAMDATA")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCONTALANCAMHORA", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTALANCAMHORA",gxz:"ZV11cContaLancamHora",gxold:"OV11cContaLancamHora",gxvar:"AV11cContaLancamHora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cContaLancamHora=Value},v2z:function(Value){gx.O.ZV11cContaLancamHora=Value},v2c:function(){gx.fn.setControlValue("vCCONTALANCAMHORA",gx.O.AV11cContaLancamHora,0)},c2v:function(){gx.O.AV11cContaLancamHora=this.val()},val:function(){return gx.fn.getControlValue("vCCONTALANCAMHORA")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKCONTALANCAMVALOR", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTALANCAMVALOR",gxz:"ZV12cContaLancamValor",gxold:"OV12cContaLancamValor",gxvar:"AV12cContaLancamValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cContaLancamValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV12cContaLancamValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCCONTALANCAMVALOR",gx.O.AV12cContaLancamValor,2,',')},c2v:function(){gx.O.AV12cContaLancamValor=this.val()},val:function(){return gx.fn.getDecimalValue("vCCONTALANCAMVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV18Linkselection_GXI)},c2v:function(){gx.O.AV18Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV18Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECEMPRESAID",gxz:"Z1685ContaPagRecEmpresaId",gxold:"O1685ContaPagRecEmpresaId",gxvar:"A1685ContaPagRecEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1685ContaPagRecEmpresaId=Value},v2z:function(Value){gx.O.Z1685ContaPagRecEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A1685ContaPagRecEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1685ContaPagRecEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECNUMERO",gxz:"Z1686ContaPagRecNumero",gxold:"O1686ContaPagRecNumero",gxvar:"A1686ContaPagRecNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1686ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1686ContaPagRecNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(51),gx.O.A1686ContaPagRecNumero,0)},c2v:function(){gx.O.A1686ContaPagRecNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMSEQUENCIA",gxz:"Z1803ContaLancamSequencia",gxold:"O1803ContaLancamSequencia",gxvar:"A1803ContaLancamSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1803ContaLancamSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1803ContaLancamSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMSEQUENCIA",row || gx.fn.currentGridRowImpl(51),gx.O.A1803ContaLancamSequencia,0)},c2v:function(){gx.O.A1803ContaLancamSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTALANCAMSEQUENCIA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMSTCONTABIL",gxz:"Z1804ContaLancamStContabil",gxold:"O1804ContaLancamStContabil",gxvar:"A1804ContaLancamStContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",inputType:'text',v2v:function(Value){gx.O.A1804ContaLancamStContabil=Value},v2z:function(Value){gx.O.Z1804ContaLancamStContabil=Value},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMSTCONTABIL",row || gx.fn.currentGridRowImpl(51),gx.O.A1804ContaLancamStContabil,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1804ContaLancamStContabil=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTALANCAMSTCONTABIL",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMDATA",gxz:"Z1805ContaLancamData",gxold:"O1805ContaLancamData",gxvar:"A1805ContaLancamData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1805ContaLancamData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1805ContaLancamData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMDATA",row || gx.fn.currentGridRowImpl(51),gx.O.A1805ContaLancamData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1805ContaLancamData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTALANCAMDATA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:5,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMHORA",gxz:"Z1806ContaLancamHora",gxold:"O1806ContaLancamHora",gxvar:"A1806ContaLancamHora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1806ContaLancamHora=Value},v2z:function(Value){gx.O.Z1806ContaLancamHora=Value},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMHORA",row || gx.fn.currentGridRowImpl(51),gx.O.A1806ContaLancamHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1806ContaLancamHora=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTALANCAMHORA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMVALOR",gxz:"Z1807ContaLancamValor",gxold:"O1807ContaLancamValor",gxvar:"A1807ContaLancamValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1807ContaLancamValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1807ContaLancamValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CONTALANCAMVALOR",row || gx.fn.currentGridRowImpl(51),gx.O.A1807ContaLancamValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1807ContaLancamValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CONTALANCAMVALOR",row || gx.fn.currentGridRowImpl(51),'.',',')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMTPLANCAMEMPID",gxz:"Z1782ContaLancamTpLancamEmpId",gxold:"O1782ContaLancamTpLancamEmpId",gxvar:"A1782ContaLancamTpLancamEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1782ContaLancamTpLancamEmpId=Value},v2z:function(Value){gx.O.Z1782ContaLancamTpLancamEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMTPLANCAMEMPID",row || gx.fn.currentGridRowImpl(51),gx.O.A1782ContaLancamTpLancamEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1782ContaLancamTpLancamEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTALANCAMTPLANCAMEMPID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMTPLANCAMID",gxz:"Z1783ContaLancamTpLancamId",gxold:"O1783ContaLancamTpLancamId",gxvar:"A1783ContaLancamTpLancamId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1783ContaLancamTpLancamId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1783ContaLancamTpLancamId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMTPLANCAMID",row || gx.fn.currentGridRowImpl(51),gx.O.A1783ContaLancamTpLancamId,0)},c2v:function(){gx.O.A1783ContaLancamTpLancamId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTALANCAMTPLANCAMID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMCCONTABILEMPID",gxz:"Z1785ContaLancamCContabilEmpId",gxold:"O1785ContaLancamCContabilEmpId",gxvar:"A1785ContaLancamCContabilEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1785ContaLancamCContabilEmpId=Value},v2z:function(Value){gx.O.Z1785ContaLancamCContabilEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMCCONTABILEMPID",row || gx.fn.currentGridRowImpl(51),gx.O.A1785ContaLancamCContabilEmpId,0)},c2v:function(){gx.O.A1785ContaLancamCContabilEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTALANCAMCCONTABILEMPID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TABLE4",grid:0};
   this.AV6cContaPagRecEmpresaId = "" ;
   this.ZV6cContaPagRecEmpresaId = "" ;
   this.OV6cContaPagRecEmpresaId = "" ;
   this.AV7cContaPagRecNumero = 0 ;
   this.ZV7cContaPagRecNumero = 0 ;
   this.OV7cContaPagRecNumero = 0 ;
   this.AV8cContaLancamSequencia = 0 ;
   this.ZV8cContaLancamSequencia = 0 ;
   this.OV8cContaLancamSequencia = 0 ;
   this.AV9cContaLancamStContabil = "" ;
   this.ZV9cContaLancamStContabil = "" ;
   this.OV9cContaLancamStContabil = "" ;
   this.AV10cContaLancamData = gx.date.nullDate() ;
   this.ZV10cContaLancamData = gx.date.nullDate() ;
   this.OV10cContaLancamData = gx.date.nullDate() ;
   this.AV11cContaLancamHora = "" ;
   this.ZV11cContaLancamHora = "" ;
   this.OV11cContaLancamHora = "" ;
   this.AV12cContaLancamValor = 0 ;
   this.ZV12cContaLancamValor = 0 ;
   this.OV12cContaLancamValor = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1685ContaPagRecEmpresaId = "" ;
   this.O1685ContaPagRecEmpresaId = "" ;
   this.Z1686ContaPagRecNumero = 0 ;
   this.O1686ContaPagRecNumero = 0 ;
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
   this.AV6cContaPagRecEmpresaId = "" ;
   this.AV7cContaPagRecNumero = 0 ;
   this.AV8cContaLancamSequencia = 0 ;
   this.AV9cContaLancamStContabil = "" ;
   this.AV10cContaLancamData = gx.date.nullDate() ;
   this.AV11cContaLancamHora = "" ;
   this.AV12cContaLancamValor = 0 ;
   this.AV13pContaPagRecEmpresaId = "" ;
   this.AV14pContaPagRecNumero = 0 ;
   this.AV15pContaLancamSequencia = 0 ;
   this.AV5LinkSelection = "" ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1803ContaLancamSequencia = 0 ;
   this.A1804ContaLancamStContabil = "" ;
   this.A1805ContaLancamData = gx.date.nullDate() ;
   this.A1806ContaLancamHora = "" ;
   this.A1807ContaLancamValor = 0 ;
   this.A1782ContaLancamTpLancamEmpId = "" ;
   this.A1783ContaLancamTpLancamId = 0 ;
   this.A1785ContaLancamCContabilEmpId = "" ;
   this.Events = {"e131l92_client": ["ENTER", true] ,"e141l91_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaPagRecEmpresaId',fld:'vCCONTAPAGRECEMPRESAID'},{av:'AV7cContaPagRecNumero',fld:'vCCONTAPAGRECNUMERO'},{av:'AV8cContaLancamSequencia',fld:'vCCONTALANCAMSEQUENCIA'},{av:'AV9cContaLancamStContabil',fld:'vCCONTALANCAMSTCONTABIL'},{av:'AV10cContaLancamData',fld:'vCCONTALANCAMDATA'},{av:'AV11cContaLancamHora',fld:'vCCONTALANCAMHORA'},{av:'AV12cContaLancamValor',fld:'vCCONTALANCAMVALOR'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1803ContaLancamSequencia',fld:'CONTALANCAMSEQUENCIA'}],[{av:'AV13pContaPagRecEmpresaId',fld:'vPCONTAPAGRECEMPRESAID'},{av:'AV14pContaPagRecNumero',fld:'vPCONTAPAGRECNUMERO'},{av:'AV15pContaLancamSequencia',fld:'vPCONTALANCAMSEQUENCIA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaPagRecEmpresaId',fld:'vCCONTAPAGRECEMPRESAID'},{av:'AV7cContaPagRecNumero',fld:'vCCONTAPAGRECNUMERO'},{av:'AV8cContaLancamSequencia',fld:'vCCONTALANCAMSEQUENCIA'},{av:'AV9cContaLancamStContabil',fld:'vCCONTALANCAMSTCONTABIL'},{av:'AV10cContaLancamData',fld:'vCCONTALANCAMDATA'},{av:'AV11cContaLancamHora',fld:'vCCONTALANCAMHORA'},{av:'AV12cContaLancamValor',fld:'vCCONTALANCAMVALOR'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaPagRecEmpresaId',fld:'vCCONTAPAGRECEMPRESAID'},{av:'AV7cContaPagRecNumero',fld:'vCCONTAPAGRECNUMERO'},{av:'AV8cContaLancamSequencia',fld:'vCCONTALANCAMSEQUENCIA'},{av:'AV9cContaLancamStContabil',fld:'vCCONTALANCAMSTCONTABIL'},{av:'AV10cContaLancamData',fld:'vCCONTALANCAMDATA'},{av:'AV11cContaLancamHora',fld:'vCCONTALANCAMHORA'},{av:'AV12cContaLancamValor',fld:'vCCONTALANCAMVALOR'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaPagRecEmpresaId',fld:'vCCONTAPAGRECEMPRESAID'},{av:'AV7cContaPagRecNumero',fld:'vCCONTAPAGRECNUMERO'},{av:'AV8cContaLancamSequencia',fld:'vCCONTALANCAMSEQUENCIA'},{av:'AV9cContaLancamStContabil',fld:'vCCONTALANCAMSTCONTABIL'},{av:'AV10cContaLancamData',fld:'vCCONTALANCAMDATA'},{av:'AV11cContaLancamHora',fld:'vCCONTALANCAMHORA'},{av:'AV12cContaLancamValor',fld:'vCCONTALANCAMVALOR'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaPagRecEmpresaId',fld:'vCCONTAPAGRECEMPRESAID'},{av:'AV7cContaPagRecNumero',fld:'vCCONTAPAGRECNUMERO'},{av:'AV8cContaLancamSequencia',fld:'vCCONTALANCAMSEQUENCIA'},{av:'AV9cContaLancamStContabil',fld:'vCCONTALANCAMSTCONTABIL'},{av:'AV10cContaLancamData',fld:'vCCONTALANCAMDATA'},{av:'AV11cContaLancamHora',fld:'vCCONTALANCAMHORA'},{av:'AV12cContaLancamValor',fld:'vCCONTALANCAMVALOR'}],[]];
   this.setVCMap("AV13pContaPagRecEmpresaId", "vPCONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV14pContaPagRecNumero", "vPCONTAPAGRECNUMERO", 0, "int");
   this.setVCMap("AV15pContaLancamSequencia", "vPCONTALANCAMSEQUENCIA", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0560());
