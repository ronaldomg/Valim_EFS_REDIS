/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:36:42.91
*/
gx.evt.autoSkip = false;
gx.define('gx0cz0', false, function () {
   this.ServerClass =  "gx0cz0" ;
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
      this.AV13pGNREDAEEmpresaId=gx.fn.getControlValue("vPGNREDAEEMPRESAID") ;
      this.AV14pGNREDAEid=gx.fn.getIntegerValue("vPGNREDAEID",'.') ;
   };
   this.Validv_Cgnredaeuffavorecido=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCGNREDAEUFFAVORECIDO");
         this.AnyError  = 0;
         if ( ! ( this.AV9cGNREDAEUFFavorecido == "" || this.AV9cGNREDAEUFFavorecido == "AC" || this.AV9cGNREDAEUFFavorecido == "AL" || this.AV9cGNREDAEUFFavorecido == "AP" || this.AV9cGNREDAEUFFavorecido == "AM" || this.AV9cGNREDAEUFFavorecido == "BA" || this.AV9cGNREDAEUFFavorecido == "CE" || this.AV9cGNREDAEUFFavorecido == "DF" || this.AV9cGNREDAEUFFavorecido == "ES" || this.AV9cGNREDAEUFFavorecido == "GO" || this.AV9cGNREDAEUFFavorecido == "MA" || this.AV9cGNREDAEUFFavorecido == "MT" || this.AV9cGNREDAEUFFavorecido == "MS" || this.AV9cGNREDAEUFFavorecido == "MG" || this.AV9cGNREDAEUFFavorecido == "PA" || this.AV9cGNREDAEUFFavorecido == "PB" || this.AV9cGNREDAEUFFavorecido == "PR" || this.AV9cGNREDAEUFFavorecido == "PE" || this.AV9cGNREDAEUFFavorecido == "PI" || this.AV9cGNREDAEUFFavorecido == "RJ" || this.AV9cGNREDAEUFFavorecido == "RN" || this.AV9cGNREDAEUFFavorecido == "RS" || this.AV9cGNREDAEUFFavorecido == "RO" || this.AV9cGNREDAEUFFavorecido == "RR" || this.AV9cGNREDAEUFFavorecido == "SC" || this.AV9cGNREDAEUFFavorecido == "SP" || this.AV9cGNREDAEUFFavorecido == "SE" || this.AV9cGNREDAEUFFavorecido == "TO" || this.AV9cGNREDAEUFFavorecido == "EX" || (""==this.AV9cGNREDAEUFFavorecido) ) )
         {
            try {
               gxballoon.setError("Campo cGNREDAEUFFavorecido fora do intervalo");
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
   this.e131r82_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141r81_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,63];
   this.GXLastCtrlId =63;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0cz0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(5386,53,"GNREDAEEMPRESAID","Empresa da GNRE/DAE","","GNREDAEEmpresaId","char",0,"px",10,10,"left",null,[],5386,"GNREDAEEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4681,54,"GNREDAEID","Número da GNRE/DAE","Selecionar","GNREDAEid","int",0,"px",7,7,"right",null,[],4681,"GNREDAEid",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(5385,55,"GNREDAETIPO","Tipo do GNRE/DAE","GNREDAETipo","char",null,0,true,false,0,"px","");
   Grid1Container.addComboBox(5388,56,"GNREDAEUFFAVORECIDO","UF do Favorecido","GNREDAEUFFavorecido","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(5389,57,"GNREDAEBANCO","Banco","","GNREDAEBanco","int",0,"px",3,3,"right",null,[],5389,"GNREDAEBanco",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5390,58,"GNREDAEAGENCIA","Agência","","GNREDAEAgencia","int",0,"px",4,4,"right",null,[],5390,"GNREDAEAgencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5391,59,"GNREDAEAUTENTICACAO","Autenticação","","GNREDAEAutenticacao","char",0,"px",30,30,"left",null,[],5391,"GNREDAEAutenticacao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5393,60,"GNREDAEVENCIMENTO","Vencimento","","GNREDAEVencimento","date",0,"px",10,10,"right",null,[],5393,"GNREDAEVencimento",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKGNREDAEEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGNREDAEEMPRESAID",gxz:"ZV6cGNREDAEEmpresaId",gxold:"OV6cGNREDAEEmpresaId",gxvar:"AV6cGNREDAEEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cGNREDAEEmpresaId=Value},v2z:function(Value){gx.O.ZV6cGNREDAEEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCGNREDAEEMPRESAID",gx.O.AV6cGNREDAEEmpresaId,0)},c2v:function(){gx.O.AV6cGNREDAEEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCGNREDAEEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKGNREDAEID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGNREDAEID",gxz:"ZV7cGNREDAEid",gxold:"OV7cGNREDAEid",gxvar:"AV7cGNREDAEid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cGNREDAEid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cGNREDAEid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCGNREDAEID",gx.O.AV7cGNREDAEid,0)},c2v:function(){gx.O.AV7cGNREDAEid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCGNREDAEID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKGNREDAETIPO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGNREDAETIPO",gxz:"ZV8cGNREDAETipo",gxold:"OV8cGNREDAETipo",gxvar:"AV8cGNREDAETipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV8cGNREDAETipo=Value},v2z:function(Value){gx.O.ZV8cGNREDAETipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCGNREDAETIPO",gx.O.AV8cGNREDAETipo)},c2v:function(){gx.O.AV8cGNREDAETipo=this.val()},val:function(){return gx.fn.getControlValue("vCGNREDAETIPO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKGNREDAEUFFAVORECIDO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cgnredaeuffavorecido,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGNREDAEUFFAVORECIDO",gxz:"ZV9cGNREDAEUFFavorecido",gxold:"OV9cGNREDAEUFFavorecido",gxvar:"AV9cGNREDAEUFFavorecido",ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9cGNREDAEUFFavorecido=Value},v2z:function(Value){gx.O.ZV9cGNREDAEUFFavorecido=Value},v2c:function(){gx.fn.setComboBoxValue("vCGNREDAEUFFAVORECIDO",gx.O.AV9cGNREDAEUFFavorecido)},c2v:function(){gx.O.AV9cGNREDAEUFFavorecido=this.val()},val:function(){return gx.fn.getControlValue("vCGNREDAEUFFAVORECIDO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKGNREDAEBANCO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGNREDAEBANCO",gxz:"ZV10cGNREDAEBanco",gxold:"OV10cGNREDAEBanco",gxvar:"AV10cGNREDAEBanco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cGNREDAEBanco=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cGNREDAEBanco=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCGNREDAEBANCO",gx.O.AV10cGNREDAEBanco,0)},c2v:function(){gx.O.AV10cGNREDAEBanco=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCGNREDAEBANCO",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKGNREDAEAGENCIA", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGNREDAEAGENCIA",gxz:"ZV11cGNREDAEAgencia",gxold:"OV11cGNREDAEAgencia",gxvar:"AV11cGNREDAEAgencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cGNREDAEAgencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cGNREDAEAgencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCGNREDAEAGENCIA",gx.O.AV11cGNREDAEAgencia,0)},c2v:function(){gx.O.AV11cGNREDAEAgencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCGNREDAEAGENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKGNREDAEAUTENTICACAO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGNREDAEAUTENTICACAO",gxz:"ZV12cGNREDAEAutenticacao",gxold:"OV12cGNREDAEAutenticacao",gxvar:"AV12cGNREDAEAutenticacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cGNREDAEAutenticacao=Value},v2z:function(Value){gx.O.ZV12cGNREDAEAutenticacao=Value},v2c:function(){gx.fn.setControlValue("vCGNREDAEAUTENTICACAO",gx.O.AV12cGNREDAEAutenticacao,0)},c2v:function(){gx.O.AV12cGNREDAEAutenticacao=this.val()},val:function(){return gx.fn.getControlValue("vCGNREDAEAUTENTICACAO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAEEMPRESAID",gxz:"Z5386GNREDAEEmpresaId",gxold:"O5386GNREDAEEmpresaId",gxvar:"A5386GNREDAEEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5386GNREDAEEmpresaId=Value},v2z:function(Value){gx.O.Z5386GNREDAEEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("GNREDAEEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A5386GNREDAEEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5386GNREDAEEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("GNREDAEEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAEID",gxz:"Z4681GNREDAEid",gxold:"O4681GNREDAEid",gxvar:"A4681GNREDAEid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4681GNREDAEid=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4681GNREDAEid=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GNREDAEID",row || gx.fn.currentGridRowImpl(51),gx.O.A4681GNREDAEid,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4681GNREDAEid=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GNREDAEID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAETIPO",gxz:"Z5385GNREDAETipo",gxold:"O5385GNREDAETipo",gxvar:"A5385GNREDAETipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A5385GNREDAETipo=Value},v2z:function(Value){gx.O.Z5385GNREDAETipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("GNREDAETIPO",row || gx.fn.currentGridRowImpl(51),gx.O.A5385GNREDAETipo)},c2v:function(){gx.O.A5385GNREDAETipo=this.val()},val:function(row){return gx.fn.getGridControlValue("GNREDAETIPO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAEUFFAVORECIDO",gxz:"Z5388GNREDAEUFFavorecido",gxold:"O5388GNREDAEUFFavorecido",gxvar:"A5388GNREDAEUFFavorecido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A5388GNREDAEUFFavorecido=Value},v2z:function(Value){gx.O.Z5388GNREDAEUFFavorecido=Value},v2c:function(row){gx.fn.setGridComboBoxValue("GNREDAEUFFAVORECIDO",row || gx.fn.currentGridRowImpl(51),gx.O.A5388GNREDAEUFFavorecido);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5388GNREDAEUFFavorecido=this.val()},val:function(row){return gx.fn.getGridControlValue("GNREDAEUFFAVORECIDO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAEBANCO",gxz:"Z5389GNREDAEBanco",gxold:"O5389GNREDAEBanco",gxvar:"A5389GNREDAEBanco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5389GNREDAEBanco=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5389GNREDAEBanco=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GNREDAEBANCO",row || gx.fn.currentGridRowImpl(51),gx.O.A5389GNREDAEBanco,0)},c2v:function(){gx.O.A5389GNREDAEBanco=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GNREDAEBANCO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAEAGENCIA",gxz:"Z5390GNREDAEAgencia",gxold:"O5390GNREDAEAgencia",gxvar:"A5390GNREDAEAgencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5390GNREDAEAgencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5390GNREDAEAgencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GNREDAEAGENCIA",row || gx.fn.currentGridRowImpl(51),gx.O.A5390GNREDAEAgencia,0)},c2v:function(){gx.O.A5390GNREDAEAgencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GNREDAEAGENCIA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:30,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAEAUTENTICACAO",gxz:"Z5391GNREDAEAutenticacao",gxold:"O5391GNREDAEAutenticacao",gxvar:"A5391GNREDAEAutenticacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5391GNREDAEAutenticacao=Value},v2z:function(Value){gx.O.Z5391GNREDAEAutenticacao=Value},v2c:function(row){gx.fn.setGridControlValue("GNREDAEAUTENTICACAO",row || gx.fn.currentGridRowImpl(51),gx.O.A5391GNREDAEAutenticacao,0)},c2v:function(){gx.O.A5391GNREDAEAutenticacao=this.val()},val:function(row){return gx.fn.getGridControlValue("GNREDAEAUTENTICACAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAEVENCIMENTO",gxz:"Z5393GNREDAEVencimento",gxold:"O5393GNREDAEVencimento",gxvar:"A5393GNREDAEVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5393GNREDAEVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5393GNREDAEVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("GNREDAEVENCIMENTO",row || gx.fn.currentGridRowImpl(51),gx.O.A5393GNREDAEVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5393GNREDAEVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("GNREDAEVENCIMENTO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABLE4",grid:0};
   this.AV6cGNREDAEEmpresaId = "" ;
   this.ZV6cGNREDAEEmpresaId = "" ;
   this.OV6cGNREDAEEmpresaId = "" ;
   this.AV7cGNREDAEid = 0 ;
   this.ZV7cGNREDAEid = 0 ;
   this.OV7cGNREDAEid = 0 ;
   this.AV8cGNREDAETipo = "" ;
   this.ZV8cGNREDAETipo = "" ;
   this.OV8cGNREDAETipo = "" ;
   this.AV9cGNREDAEUFFavorecido = "" ;
   this.ZV9cGNREDAEUFFavorecido = "" ;
   this.OV9cGNREDAEUFFavorecido = "" ;
   this.AV10cGNREDAEBanco = 0 ;
   this.ZV10cGNREDAEBanco = 0 ;
   this.OV10cGNREDAEBanco = 0 ;
   this.AV11cGNREDAEAgencia = 0 ;
   this.ZV11cGNREDAEAgencia = 0 ;
   this.OV11cGNREDAEAgencia = 0 ;
   this.AV12cGNREDAEAutenticacao = "" ;
   this.ZV12cGNREDAEAutenticacao = "" ;
   this.OV12cGNREDAEAutenticacao = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z5386GNREDAEEmpresaId = "" ;
   this.O5386GNREDAEEmpresaId = "" ;
   this.Z4681GNREDAEid = 0 ;
   this.O4681GNREDAEid = 0 ;
   this.Z5385GNREDAETipo = "" ;
   this.O5385GNREDAETipo = "" ;
   this.Z5388GNREDAEUFFavorecido = "" ;
   this.O5388GNREDAEUFFavorecido = "" ;
   this.Z5389GNREDAEBanco = 0 ;
   this.O5389GNREDAEBanco = 0 ;
   this.Z5390GNREDAEAgencia = 0 ;
   this.O5390GNREDAEAgencia = 0 ;
   this.Z5391GNREDAEAutenticacao = "" ;
   this.O5391GNREDAEAutenticacao = "" ;
   this.Z5393GNREDAEVencimento = gx.date.nullDate() ;
   this.O5393GNREDAEVencimento = gx.date.nullDate() ;
   this.AV6cGNREDAEEmpresaId = "" ;
   this.AV7cGNREDAEid = 0 ;
   this.AV8cGNREDAETipo = "" ;
   this.AV9cGNREDAEUFFavorecido = "" ;
   this.AV10cGNREDAEBanco = 0 ;
   this.AV11cGNREDAEAgencia = 0 ;
   this.AV12cGNREDAEAutenticacao = "" ;
   this.AV13pGNREDAEEmpresaId = "" ;
   this.AV14pGNREDAEid = 0 ;
   this.AV5LinkSelection = "" ;
   this.A5386GNREDAEEmpresaId = "" ;
   this.A4681GNREDAEid = 0 ;
   this.A5385GNREDAETipo = "" ;
   this.A5388GNREDAEUFFavorecido = "" ;
   this.A5389GNREDAEBanco = 0 ;
   this.A5390GNREDAEAgencia = 0 ;
   this.A5391GNREDAEAutenticacao = "" ;
   this.A5393GNREDAEVencimento = gx.date.nullDate() ;
   this.Events = {"e131r82_client": ["ENTER", true] ,"e141r81_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cGNREDAEEmpresaId',fld:'vCGNREDAEEMPRESAID'},{av:'AV7cGNREDAEid',fld:'vCGNREDAEID'},{av:'AV8cGNREDAETipo',fld:'vCGNREDAETIPO'},{av:'AV9cGNREDAEUFFavorecido',fld:'vCGNREDAEUFFAVORECIDO'},{av:'AV10cGNREDAEBanco',fld:'vCGNREDAEBANCO'},{av:'AV11cGNREDAEAgencia',fld:'vCGNREDAEAGENCIA'},{av:'AV12cGNREDAEAutenticacao',fld:'vCGNREDAEAUTENTICACAO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A5386GNREDAEEmpresaId',fld:'GNREDAEEMPRESAID'},{av:'A4681GNREDAEid',fld:'GNREDAEID'}],[{av:'AV13pGNREDAEEmpresaId',fld:'vPGNREDAEEMPRESAID'},{av:'AV14pGNREDAEid',fld:'vPGNREDAEID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cGNREDAEEmpresaId',fld:'vCGNREDAEEMPRESAID'},{av:'AV7cGNREDAEid',fld:'vCGNREDAEID'},{av:'AV8cGNREDAETipo',fld:'vCGNREDAETIPO'},{av:'AV9cGNREDAEUFFavorecido',fld:'vCGNREDAEUFFAVORECIDO'},{av:'AV10cGNREDAEBanco',fld:'vCGNREDAEBANCO'},{av:'AV11cGNREDAEAgencia',fld:'vCGNREDAEAGENCIA'},{av:'AV12cGNREDAEAutenticacao',fld:'vCGNREDAEAUTENTICACAO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cGNREDAEEmpresaId',fld:'vCGNREDAEEMPRESAID'},{av:'AV7cGNREDAEid',fld:'vCGNREDAEID'},{av:'AV8cGNREDAETipo',fld:'vCGNREDAETIPO'},{av:'AV9cGNREDAEUFFavorecido',fld:'vCGNREDAEUFFAVORECIDO'},{av:'AV10cGNREDAEBanco',fld:'vCGNREDAEBANCO'},{av:'AV11cGNREDAEAgencia',fld:'vCGNREDAEAGENCIA'},{av:'AV12cGNREDAEAutenticacao',fld:'vCGNREDAEAUTENTICACAO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cGNREDAEEmpresaId',fld:'vCGNREDAEEMPRESAID'},{av:'AV7cGNREDAEid',fld:'vCGNREDAEID'},{av:'AV8cGNREDAETipo',fld:'vCGNREDAETIPO'},{av:'AV9cGNREDAEUFFavorecido',fld:'vCGNREDAEUFFAVORECIDO'},{av:'AV10cGNREDAEBanco',fld:'vCGNREDAEBANCO'},{av:'AV11cGNREDAEAgencia',fld:'vCGNREDAEAGENCIA'},{av:'AV12cGNREDAEAutenticacao',fld:'vCGNREDAEAUTENTICACAO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cGNREDAEEmpresaId',fld:'vCGNREDAEEMPRESAID'},{av:'AV7cGNREDAEid',fld:'vCGNREDAEID'},{av:'AV8cGNREDAETipo',fld:'vCGNREDAETIPO'},{av:'AV9cGNREDAEUFFavorecido',fld:'vCGNREDAEUFFAVORECIDO'},{av:'AV10cGNREDAEBanco',fld:'vCGNREDAEBANCO'},{av:'AV11cGNREDAEAgencia',fld:'vCGNREDAEAGENCIA'},{av:'AV12cGNREDAEAutenticacao',fld:'vCGNREDAEAUTENTICACAO'}],[]];
   this.setVCMap("AV13pGNREDAEEmpresaId", "vPGNREDAEEMPRESAID", 0, "char");
   this.setVCMap("AV14pGNREDAEid", "vPGNREDAEID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0cz0());
