/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:27:36.21
*/
gx.evt.autoSkip = false;
gx.define('gx04i0', false, function () {
   this.ServerClass =  "gx04i0" ;
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
      this.AV13pTransacaoPrincipalEmpresaId=gx.fn.getControlValue("vPTRANSACAOPRINCIPALEMPRESAID") ;
      this.AV14pTransacaoPrincipalTipoPagRec=gx.fn.getControlValue("vPTRANSACAOPRINCIPALTIPOPAGREC") ;
      this.AV15pTransacaoPrincipalId=gx.fn.getControlValue("vPTRANSACAOPRINCIPALID") ;
      this.AV16pTransacaoAssociadaEmpresaId=gx.fn.getControlValue("vPTRANSACAOASSOCIADAEMPRESAID") ;
      this.AV17pTransacaoAssociadaTipoPagRec=gx.fn.getControlValue("vPTRANSACAOASSOCIADATIPOPAGREC") ;
      this.AV18pTransacaoAssociadaId=gx.fn.getControlValue("vPTRANSACAOASSOCIADAID") ;
   };
   this.Validv_Ctransacaoprincipaltipopagrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCTRANSACAOPRINCIPALTIPOPAGREC");
         this.AnyError  = 0;
         if ( ! ( this.AV7cTransacaoPrincipalTipoPagRec == "0" || this.AV7cTransacaoPrincipalTipoPagRec == "P" || this.AV7cTransacaoPrincipalTipoPagRec == "R" || (""==this.AV7cTransacaoPrincipalTipoPagRec) ) )
         {
            try {
               gxballoon.setError("Campo cTransacaoPrincipalTipoPagRec fora do intervalo");
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
   this.Validv_Ctransacaoassociadatipopagrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCTRANSACAOASSOCIADATIPOPAGREC");
         this.AnyError  = 0;
         if ( ! ( this.AV10cTransacaoAssociadaTipoPagRec == "0" || this.AV10cTransacaoAssociadaTipoPagRec == "P" || this.AV10cTransacaoAssociadaTipoPagRec == "R" || (""==this.AV10cTransacaoAssociadaTipoPagRec) ) )
         {
            try {
               gxballoon.setError("Campo cTransacaoAssociadaTipoPagRec fora do intervalo");
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
   this.e131kb2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141kb1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx04i0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1251,53,"TRANSACAOPRINCIPALEMPRESAID","Empresa da Transação Principal","","TransacaoPrincipalEmpresaId","char",0,"px",10,10,"left",null,[],1251,"TransacaoPrincipalEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(1533,54,"TRANSACAOPRINCIPALTIPOPAGREC","Transacao Principal Tipo Pag Rec","TransacaoPrincipalTipoPagRec","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(1154,55,"TRANSACAOPRINCIPALID","Transação Principal","","TransacaoPrincipalId","char",0,"px",8,8,"left",null,[],1154,"TransacaoPrincipalId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1153,56,"TRANSACAOASSOCIADAEMPRESAID","Empresa da Transação Associada","","TransacaoAssociadaEmpresaId","char",0,"px",10,10,"left",null,[],1153,"TransacaoAssociadaEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(1532,57,"TRANSACAOASSOCIADATIPOPAGREC","Transacao Associada Tipo Pag Rec","TransacaoAssociadaTipoPagRec","char",null,0,false,false,0,"px","");
   Grid1Container.addSingleLineEdit(1132,58,"TRANSACAOASSOCIADAID","Transação Associada","","TransacaoAssociadaId","char",0,"px",8,8,"left",null,[],1132,"TransacaoAssociadaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTRANSACAOPRINCIPALEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOPRINCIPALEMPRESAID",gxz:"ZV6cTransacaoPrincipalEmpresaId",gxold:"OV6cTransacaoPrincipalEmpresaId",gxvar:"AV6cTransacaoPrincipalEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTransacaoPrincipalEmpresaId=Value},v2z:function(Value){gx.O.ZV6cTransacaoPrincipalEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOPRINCIPALEMPRESAID",gx.O.AV6cTransacaoPrincipalEmpresaId,0)},c2v:function(){gx.O.AV6cTransacaoPrincipalEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOPRINCIPALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTRANSACAOPRINCIPALTIPOPAGREC", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ctransacaoprincipaltipopagrec,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOPRINCIPALTIPOPAGREC",gxz:"ZV7cTransacaoPrincipalTipoPagRec",gxold:"OV7cTransacaoPrincipalTipoPagRec",gxvar:"AV7cTransacaoPrincipalTipoPagRec",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV7cTransacaoPrincipalTipoPagRec=Value},v2z:function(Value){gx.O.ZV7cTransacaoPrincipalTipoPagRec=Value},v2c:function(){gx.fn.setComboBoxValue("vCTRANSACAOPRINCIPALTIPOPAGREC",gx.O.AV7cTransacaoPrincipalTipoPagRec)},c2v:function(){gx.O.AV7cTransacaoPrincipalTipoPagRec=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOPRINCIPALTIPOPAGREC")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTRANSACAOPRINCIPALID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOPRINCIPALID",gxz:"ZV8cTransacaoPrincipalId",gxold:"OV8cTransacaoPrincipalId",gxvar:"AV8cTransacaoPrincipalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cTransacaoPrincipalId=Value},v2z:function(Value){gx.O.ZV8cTransacaoPrincipalId=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOPRINCIPALID",gx.O.AV8cTransacaoPrincipalId,0)},c2v:function(){gx.O.AV8cTransacaoPrincipalId=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOPRINCIPALID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKTRANSACAOASSOCIADAEMPRESAID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOASSOCIADAEMPRESAID",gxz:"ZV9cTransacaoAssociadaEmpresaId",gxold:"OV9cTransacaoAssociadaEmpresaId",gxvar:"AV9cTransacaoAssociadaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cTransacaoAssociadaEmpresaId=Value},v2z:function(Value){gx.O.ZV9cTransacaoAssociadaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOASSOCIADAEMPRESAID",gx.O.AV9cTransacaoAssociadaEmpresaId,0)},c2v:function(){gx.O.AV9cTransacaoAssociadaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOASSOCIADAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKTRANSACAOASSOCIADATIPOPAGREC", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ctransacaoassociadatipopagrec,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOASSOCIADATIPOPAGREC",gxz:"ZV10cTransacaoAssociadaTipoPagRec",gxold:"OV10cTransacaoAssociadaTipoPagRec",gxvar:"AV10cTransacaoAssociadaTipoPagRec",ucs:[],op:[34],ip:[34],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10cTransacaoAssociadaTipoPagRec=Value},v2z:function(Value){gx.O.ZV10cTransacaoAssociadaTipoPagRec=Value},v2c:function(){gx.fn.setComboBoxValue("vCTRANSACAOASSOCIADATIPOPAGREC",gx.O.AV10cTransacaoAssociadaTipoPagRec)},c2v:function(){gx.O.AV10cTransacaoAssociadaTipoPagRec=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOASSOCIADATIPOPAGREC")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKTRANSACAOASSOCIADAID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOASSOCIADAID",gxz:"ZV11cTransacaoAssociadaId",gxold:"OV11cTransacaoAssociadaId",gxvar:"AV11cTransacaoAssociadaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cTransacaoAssociadaId=Value},v2z:function(Value){gx.O.ZV11cTransacaoAssociadaId=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOASSOCIADAID",gx.O.AV11cTransacaoAssociadaId,0)},c2v:function(){gx.O.AV11cTransacaoAssociadaId=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOASSOCIADAID")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKTIPOLANCAMENTOASSOCIADAEMPRESAID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLANCAMENTOASSOCIADAEMPRESAID",gxz:"ZV12cTipoLancamentoAssociadaEmpresaId",gxold:"OV12cTipoLancamentoAssociadaEmpresaId",gxvar:"AV12cTipoLancamentoAssociadaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cTipoLancamentoAssociadaEmpresaId=Value},v2z:function(Value){gx.O.ZV12cTipoLancamentoAssociadaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCTIPOLANCAMENTOASSOCIADAEMPRESAID",gx.O.AV12cTipoLancamentoAssociadaEmpresaId,0)},c2v:function(){gx.O.AV12cTipoLancamentoAssociadaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOLANCAMENTOASSOCIADAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV21Linkselection_GXI)},c2v:function(){gx.O.AV21Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV21Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOPRINCIPALEMPRESAID",gxz:"Z1251TransacaoPrincipalEmpresaId",gxold:"O1251TransacaoPrincipalEmpresaId",gxvar:"A1251TransacaoPrincipalEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1251TransacaoPrincipalEmpresaId=Value},v2z:function(Value){gx.O.Z1251TransacaoPrincipalEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOPRINCIPALEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A1251TransacaoPrincipalEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1251TransacaoPrincipalEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOPRINCIPALEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOPRINCIPALTIPOPAGREC",gxz:"Z1533TransacaoPrincipalTipoPagRec",gxold:"O1533TransacaoPrincipalTipoPagRec",gxvar:"A1533TransacaoPrincipalTipoPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1533TransacaoPrincipalTipoPagRec=Value},v2z:function(Value){gx.O.Z1533TransacaoPrincipalTipoPagRec=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TRANSACAOPRINCIPALTIPOPAGREC",row || gx.fn.currentGridRowImpl(51),gx.O.A1533TransacaoPrincipalTipoPagRec);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1533TransacaoPrincipalTipoPagRec=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOPRINCIPALTIPOPAGREC",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOPRINCIPALID",gxz:"Z1154TransacaoPrincipalId",gxold:"O1154TransacaoPrincipalId",gxvar:"A1154TransacaoPrincipalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1154TransacaoPrincipalId=Value},v2z:function(Value){gx.O.Z1154TransacaoPrincipalId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOPRINCIPALID",row || gx.fn.currentGridRowImpl(51),gx.O.A1154TransacaoPrincipalId,0)},c2v:function(){gx.O.A1154TransacaoPrincipalId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOPRINCIPALID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOASSOCIADAEMPRESAID",gxz:"Z1153TransacaoAssociadaEmpresaId",gxold:"O1153TransacaoAssociadaEmpresaId",gxvar:"A1153TransacaoAssociadaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1153TransacaoAssociadaEmpresaId=Value},v2z:function(Value){gx.O.Z1153TransacaoAssociadaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOASSOCIADAEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A1153TransacaoAssociadaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1153TransacaoAssociadaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOASSOCIADAEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOASSOCIADATIPOPAGREC",gxz:"Z1532TransacaoAssociadaTipoPagRec",gxold:"O1532TransacaoAssociadaTipoPagRec",gxvar:"A1532TransacaoAssociadaTipoPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1532TransacaoAssociadaTipoPagRec=Value},v2z:function(Value){gx.O.Z1532TransacaoAssociadaTipoPagRec=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TRANSACAOASSOCIADATIPOPAGREC",row || gx.fn.currentGridRowImpl(51),gx.O.A1532TransacaoAssociadaTipoPagRec);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1532TransacaoAssociadaTipoPagRec=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOASSOCIADATIPOPAGREC",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOASSOCIADAID",gxz:"Z1132TransacaoAssociadaId",gxold:"O1132TransacaoAssociadaId",gxvar:"A1132TransacaoAssociadaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1132TransacaoAssociadaId=Value},v2z:function(Value){gx.O.Z1132TransacaoAssociadaId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOASSOCIADAID",row || gx.fn.currentGridRowImpl(51),gx.O.A1132TransacaoAssociadaId,0)},c2v:function(){gx.O.A1132TransacaoAssociadaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOASSOCIADAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cTransacaoPrincipalEmpresaId = "" ;
   this.ZV6cTransacaoPrincipalEmpresaId = "" ;
   this.OV6cTransacaoPrincipalEmpresaId = "" ;
   this.AV7cTransacaoPrincipalTipoPagRec = "" ;
   this.ZV7cTransacaoPrincipalTipoPagRec = "" ;
   this.OV7cTransacaoPrincipalTipoPagRec = "" ;
   this.AV8cTransacaoPrincipalId = "" ;
   this.ZV8cTransacaoPrincipalId = "" ;
   this.OV8cTransacaoPrincipalId = "" ;
   this.AV9cTransacaoAssociadaEmpresaId = "" ;
   this.ZV9cTransacaoAssociadaEmpresaId = "" ;
   this.OV9cTransacaoAssociadaEmpresaId = "" ;
   this.AV10cTransacaoAssociadaTipoPagRec = "" ;
   this.ZV10cTransacaoAssociadaTipoPagRec = "" ;
   this.OV10cTransacaoAssociadaTipoPagRec = "" ;
   this.AV11cTransacaoAssociadaId = "" ;
   this.ZV11cTransacaoAssociadaId = "" ;
   this.OV11cTransacaoAssociadaId = "" ;
   this.AV12cTipoLancamentoAssociadaEmpresaId = "" ;
   this.ZV12cTipoLancamentoAssociadaEmpresaId = "" ;
   this.OV12cTipoLancamentoAssociadaEmpresaId = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1251TransacaoPrincipalEmpresaId = "" ;
   this.O1251TransacaoPrincipalEmpresaId = "" ;
   this.Z1533TransacaoPrincipalTipoPagRec = "" ;
   this.O1533TransacaoPrincipalTipoPagRec = "" ;
   this.Z1154TransacaoPrincipalId = "" ;
   this.O1154TransacaoPrincipalId = "" ;
   this.Z1153TransacaoAssociadaEmpresaId = "" ;
   this.O1153TransacaoAssociadaEmpresaId = "" ;
   this.Z1532TransacaoAssociadaTipoPagRec = "" ;
   this.O1532TransacaoAssociadaTipoPagRec = "" ;
   this.Z1132TransacaoAssociadaId = "" ;
   this.O1132TransacaoAssociadaId = "" ;
   this.AV6cTransacaoPrincipalEmpresaId = "" ;
   this.AV7cTransacaoPrincipalTipoPagRec = "" ;
   this.AV8cTransacaoPrincipalId = "" ;
   this.AV9cTransacaoAssociadaEmpresaId = "" ;
   this.AV10cTransacaoAssociadaTipoPagRec = "" ;
   this.AV11cTransacaoAssociadaId = "" ;
   this.AV12cTipoLancamentoAssociadaEmpresaId = "" ;
   this.AV13pTransacaoPrincipalEmpresaId = "" ;
   this.AV14pTransacaoPrincipalTipoPagRec = "" ;
   this.AV15pTransacaoPrincipalId = "" ;
   this.AV16pTransacaoAssociadaEmpresaId = "" ;
   this.AV17pTransacaoAssociadaTipoPagRec = "" ;
   this.AV18pTransacaoAssociadaId = "" ;
   this.A1262TipoLancamentoAssociadaEmpresa = "" ;
   this.AV5LinkSelection = "" ;
   this.A1251TransacaoPrincipalEmpresaId = "" ;
   this.A1533TransacaoPrincipalTipoPagRec = "" ;
   this.A1154TransacaoPrincipalId = "" ;
   this.A1153TransacaoAssociadaEmpresaId = "" ;
   this.A1532TransacaoAssociadaTipoPagRec = "" ;
   this.A1132TransacaoAssociadaId = "" ;
   this.Events = {"e131kb2_client": ["ENTER", true] ,"e141kb1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoPrincipalEmpresaId',fld:'vCTRANSACAOPRINCIPALEMPRESAID'},{av:'AV7cTransacaoPrincipalTipoPagRec',fld:'vCTRANSACAOPRINCIPALTIPOPAGREC'},{av:'AV8cTransacaoPrincipalId',fld:'vCTRANSACAOPRINCIPALID'},{av:'AV9cTransacaoAssociadaEmpresaId',fld:'vCTRANSACAOASSOCIADAEMPRESAID'},{av:'AV10cTransacaoAssociadaTipoPagRec',fld:'vCTRANSACAOASSOCIADATIPOPAGREC'},{av:'AV11cTransacaoAssociadaId',fld:'vCTRANSACAOASSOCIADAID'},{av:'AV12cTipoLancamentoAssociadaEmpresaId',fld:'vCTIPOLANCAMENTOASSOCIADAEMPRESAID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1251TransacaoPrincipalEmpresaId',fld:'TRANSACAOPRINCIPALEMPRESAID'},{av:'A1533TransacaoPrincipalTipoPagRec',fld:'TRANSACAOPRINCIPALTIPOPAGREC'},{av:'A1154TransacaoPrincipalId',fld:'TRANSACAOPRINCIPALID'},{av:'A1153TransacaoAssociadaEmpresaId',fld:'TRANSACAOASSOCIADAEMPRESAID'},{av:'A1532TransacaoAssociadaTipoPagRec',fld:'TRANSACAOASSOCIADATIPOPAGREC'},{av:'A1132TransacaoAssociadaId',fld:'TRANSACAOASSOCIADAID'}],[{av:'AV13pTransacaoPrincipalEmpresaId',fld:'vPTRANSACAOPRINCIPALEMPRESAID'},{av:'AV14pTransacaoPrincipalTipoPagRec',fld:'vPTRANSACAOPRINCIPALTIPOPAGREC'},{av:'AV15pTransacaoPrincipalId',fld:'vPTRANSACAOPRINCIPALID'},{av:'AV16pTransacaoAssociadaEmpresaId',fld:'vPTRANSACAOASSOCIADAEMPRESAID'},{av:'AV17pTransacaoAssociadaTipoPagRec',fld:'vPTRANSACAOASSOCIADATIPOPAGREC'},{av:'AV18pTransacaoAssociadaId',fld:'vPTRANSACAOASSOCIADAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoPrincipalEmpresaId',fld:'vCTRANSACAOPRINCIPALEMPRESAID'},{av:'AV7cTransacaoPrincipalTipoPagRec',fld:'vCTRANSACAOPRINCIPALTIPOPAGREC'},{av:'AV8cTransacaoPrincipalId',fld:'vCTRANSACAOPRINCIPALID'},{av:'AV9cTransacaoAssociadaEmpresaId',fld:'vCTRANSACAOASSOCIADAEMPRESAID'},{av:'AV10cTransacaoAssociadaTipoPagRec',fld:'vCTRANSACAOASSOCIADATIPOPAGREC'},{av:'AV11cTransacaoAssociadaId',fld:'vCTRANSACAOASSOCIADAID'},{av:'AV12cTipoLancamentoAssociadaEmpresaId',fld:'vCTIPOLANCAMENTOASSOCIADAEMPRESAID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoPrincipalEmpresaId',fld:'vCTRANSACAOPRINCIPALEMPRESAID'},{av:'AV7cTransacaoPrincipalTipoPagRec',fld:'vCTRANSACAOPRINCIPALTIPOPAGREC'},{av:'AV8cTransacaoPrincipalId',fld:'vCTRANSACAOPRINCIPALID'},{av:'AV9cTransacaoAssociadaEmpresaId',fld:'vCTRANSACAOASSOCIADAEMPRESAID'},{av:'AV10cTransacaoAssociadaTipoPagRec',fld:'vCTRANSACAOASSOCIADATIPOPAGREC'},{av:'AV11cTransacaoAssociadaId',fld:'vCTRANSACAOASSOCIADAID'},{av:'AV12cTipoLancamentoAssociadaEmpresaId',fld:'vCTIPOLANCAMENTOASSOCIADAEMPRESAID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoPrincipalEmpresaId',fld:'vCTRANSACAOPRINCIPALEMPRESAID'},{av:'AV7cTransacaoPrincipalTipoPagRec',fld:'vCTRANSACAOPRINCIPALTIPOPAGREC'},{av:'AV8cTransacaoPrincipalId',fld:'vCTRANSACAOPRINCIPALID'},{av:'AV9cTransacaoAssociadaEmpresaId',fld:'vCTRANSACAOASSOCIADAEMPRESAID'},{av:'AV10cTransacaoAssociadaTipoPagRec',fld:'vCTRANSACAOASSOCIADATIPOPAGREC'},{av:'AV11cTransacaoAssociadaId',fld:'vCTRANSACAOASSOCIADAID'},{av:'AV12cTipoLancamentoAssociadaEmpresaId',fld:'vCTIPOLANCAMENTOASSOCIADAEMPRESAID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoPrincipalEmpresaId',fld:'vCTRANSACAOPRINCIPALEMPRESAID'},{av:'AV7cTransacaoPrincipalTipoPagRec',fld:'vCTRANSACAOPRINCIPALTIPOPAGREC'},{av:'AV8cTransacaoPrincipalId',fld:'vCTRANSACAOPRINCIPALID'},{av:'AV9cTransacaoAssociadaEmpresaId',fld:'vCTRANSACAOASSOCIADAEMPRESAID'},{av:'AV10cTransacaoAssociadaTipoPagRec',fld:'vCTRANSACAOASSOCIADATIPOPAGREC'},{av:'AV11cTransacaoAssociadaId',fld:'vCTRANSACAOASSOCIADAID'},{av:'AV12cTipoLancamentoAssociadaEmpresaId',fld:'vCTIPOLANCAMENTOASSOCIADAEMPRESAID'}],[]];
   this.setVCMap("AV13pTransacaoPrincipalEmpresaId", "vPTRANSACAOPRINCIPALEMPRESAID", 0, "char");
   this.setVCMap("AV14pTransacaoPrincipalTipoPagRec", "vPTRANSACAOPRINCIPALTIPOPAGREC", 0, "char");
   this.setVCMap("AV15pTransacaoPrincipalId", "vPTRANSACAOPRINCIPALID", 0, "char");
   this.setVCMap("AV16pTransacaoAssociadaEmpresaId", "vPTRANSACAOASSOCIADAEMPRESAID", 0, "char");
   this.setVCMap("AV17pTransacaoAssociadaTipoPagRec", "vPTRANSACAOASSOCIADATIPOPAGREC", 0, "char");
   this.setVCMap("AV18pTransacaoAssociadaId", "vPTRANSACAOASSOCIADAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx04i0());
