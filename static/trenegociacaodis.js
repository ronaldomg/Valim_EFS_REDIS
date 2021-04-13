/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:36:17.8
*/
gx.evt.autoSkip = false;
gx.define('trenegociacaodis', false, function () {
   this.ServerClass =  "trenegociacaodis" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("20", "LAST");
   this.addKeyListener("19", "FIRST");
   this.addKeyListener("16", "SELECT");
   this.addKeyListener("13", "DELETE");
   this.addKeyListener("9", "GET");
   this.addKeyListener("2", "PROMPT");
   this.addKeyListener("8", "NEXT");
   this.addKeyListener("7", "PREVIOUS");
   this.addKeyListener("4", "CHECK");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Renegociacaodispessoaempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RENEGOCIACAODISPESSOAEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Renegociacaodispessoaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Renegociacaodispessoaid",["gx.O.A11107RenegociacaoDisPessoaEmpid", "gx.O.A11108RenegociacaoDisPessoaId", "gx.O.A11113RenegociacaoDisPessoaNome"],["A11113RenegociacaoDisPessoaNome"]);
      return true;
   }
   this.Valid_Renegociacaodisnumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Renegociacaodisnumero",["gx.O.A11107RenegociacaoDisPessoaEmpid", "gx.O.A11108RenegociacaoDisPessoaId", "gx.O.A11109RenegociacaoDisNumero", 'gx.date.urlDate(gx.O.A11112RenegociacaoDisDataEmissao,"DMY4")', 'gx.date.urlDateTime(gx.O.A11114RenegociacaoDisDataHoraAlt,"DMY4")', "gx.O.A11115RenegociacaoDisUsuarioAlt"],["A11112RenegociacaoDisDataEmissao", "A11114RenegociacaoDisDataHoraAlt", "A11115RenegociacaoDisUsuarioAlt", "A11113RenegociacaoDisPessoaNome", "Gx_mode", "Z11107RenegociacaoDisPessoaEmpid", "Z11108RenegociacaoDisPessoaId", "Z11109RenegociacaoDisNumero", "Z11112RenegociacaoDisDataEmissao", "Z11114RenegociacaoDisDataHoraAlt", "Z11115RenegociacaoDisUsuarioAlt", "Z11113RenegociacaoDisPessoaNome", "Gridtrenegociacaodis_conta", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Renegociacaodiscontapgrecempid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(76) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("RENEGOCIACAODISCONTAPGRECEMPID", gx.fn.currentGridRowImpl(76));
         this.AnyError  = 0;
         this.sMode816 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(816,76)  ;
         this.standaloneModalFZ816( );
         this.standaloneNotModalFZ816( );

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode816  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Renegociacaodiscontapgrecnumer=function()
   {
      this.sMode816 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(816,76)  ;
      if(  gx.fn.currentGridRowImpl(76) ===0) {
         this.Gx_mode =  this.sMode816  ;
         return true;
      }
      var gxballoon = gx.util.balloon.getNew("RENEGOCIACAODISCONTAPGRECNUMER", gx.fn.currentGridRowImpl(76));
      if ( gx.fn.gridDuplicateKey(78) )
      {
         gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Conta", "", "", "", "", "", "", "", ""));
         this.AnyError = gx.num.trunc( 1 ,0) ;
         this.Gx_mode =  this.sMode816  ;
         return gxballoon.show();
      }
      gx.ajax.validSrvEvt("dyncall","valid_Renegociacaodiscontapgrecnumer",["gx.O.A11110RenegociacaoDisContaPgRecEmpId", "gx.O.A11111RenegociacaoDisContaPgRecNumer", "gx.O.A11120RenegociacaoDisContaPgRecPagRe"],["A11120RenegociacaoDisContaPgRecPagRe"]);
      this.Gx_mode =  this.sMode816  ;
      return true;
   }
   this.standaloneModalFZ816=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("RENEGOCIACAODISCONTAPGRECEMPID","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("RENEGOCIACAODISCONTAPGRECEMPID","Enabled", 1 );
         }
      }
      catch(e){}
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("RENEGOCIACAODISCONTAPGRECNUMER","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("RENEGOCIACAODISCONTAPGRECNUMER","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModalFZ816=function()
   {
      return true;
   }
   this.e11fz815_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12fz815_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,75,77,78,79,80,81,82,83,89];
   this.GXLastCtrlId =89;
   this.Gridtrenegociacaodis_contaContainer = new gx.grid.grid(this, 816,"Conta",76,"Gridtrenegociacaodis_conta","Gridtrenegociacaodis_conta","Gridtrenegociacaodis_contaContainer",this.CmpContext,this.IsMasterPage,"trenegociacaodis",[11110,11111],false,1,false,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Gridtrenegociacaodis_contaContainer = this.Gridtrenegociacaodis_contaContainer;
   Gridtrenegociacaodis_contaContainer.addSingleLineEdit(11110,77,"RENEGOCIACAODISCONTAPGRECEMPID","Emp Id","","RenegociacaoDisContaPgRecEmpId","char",0,"px",10,10,"left",null,[],11110,"RenegociacaoDisContaPgRecEmpId",true,0,false,false,"Attribute",1,"");
   Gridtrenegociacaodis_contaContainer.addSingleLineEdit(11111,78,"RENEGOCIACAODISCONTAPGRECNUMER","Rec Numero","","RenegociacaoDisContaPgRecNumer","int",0,"px",8,8,"right",null,[],11111,"RenegociacaoDisContaPgRecNumer",true,0,false,false,"Attribute",1,"");
   Gridtrenegociacaodis_contaContainer.addBitmap("prompt_11110_11111","PROMPT_11110_11111",90,0,"",0,"",null,"","","gx-prompt Image","");
   Gridtrenegociacaodis_contaContainer.addComboBox(11120,79,"RENEGOCIACAODISCONTAPGRECPAGRE","Pag Rec","RenegociacaoDisContaPgRecPagRe","char",null,0,true,false,0,"px","");
   Gridtrenegociacaodis_contaContainer.addSingleLineEdit(11119,80,"RENEGOCIACAODISCONTATIPO","Conta Tipo","","RenegociacaoDisContaTipo","char",0,"px",1,1,"left",null,[],11119,"RenegociacaoDisContaTipo",true,0,false,false,"Attribute",1,"");
   Gridtrenegociacaodis_contaContainer.addSingleLineEdit(11116,81,"RENEGOCIACAODISCONTAVALOR","Conta Valor","","RenegociacaoDisContaValor","decimal",0,"px",22,22,"right",null,[],11116,"RenegociacaoDisContaValor",true,2,false,false,"Attribute",1,"");
   Gridtrenegociacaodis_contaContainer.addSingleLineEdit(11117,82,"RENEGOCIACAODISCONTADATAHORAAL","Hora Alt","","RenegociacaoDisContaDataHoraAl","dtime",0,"px",16,16,"right",null,[],11117,"RenegociacaoDisContaDataHoraAl",true,5,false,false,"Attribute",1,"");
   Gridtrenegociacaodis_contaContainer.addSingleLineEdit(11118,83,"RENEGOCIACAODISCONTAUSUARIOALT","Usuario Alt","","RenegociacaoDisContaUsuarioAlt","char",0,"px",12,12,"left",null,[],11118,"RenegociacaoDisContaUsuarioAlt",true,0,false,false,"Attribute",1,"");
   this.setGrid(Gridtrenegociacaodis_contaContainer);
   GXValidFnc[2]={fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[8]={fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[9]={fld:"BTN_FIRST",grid:0};
   GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};
   GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};
   GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};
   GXValidFnc[13]={fld:"BTN_NEXT",grid:0};
   GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};
   GXValidFnc[15]={fld:"BTN_LAST",grid:0};
   GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};
   GXValidFnc[17]={fld:"BTN_SELECT",grid:0};
   GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};
   GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};
   GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};
   GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};
   GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};
   GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};
   GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};
   GXValidFnc[27]={fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={fld:"TABLE1",grid:0};
   GXValidFnc[34]={fld:"TABLE2",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCKRENEGOCIACAODISPESSOAEMPID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Renegociacaodispessoaempid,isvalid:null,rgrid:[this.Gridtrenegociacaodis_contaContainer],fld:"RENEGOCIACAODISPESSOAEMPID",gxz:"Z11107RenegociacaoDisPessoaEmpid",gxold:"O11107RenegociacaoDisPessoaEmpid",gxvar:"A11107RenegociacaoDisPessoaEmpid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11107RenegociacaoDisPessoaEmpid=Value},v2z:function(Value){gx.O.Z11107RenegociacaoDisPessoaEmpid=Value},v2c:function(){gx.fn.setControlValue("RENEGOCIACAODISPESSOAEMPID",gx.O.A11107RenegociacaoDisPessoaEmpid,0)},c2v:function(){gx.O.A11107RenegociacaoDisPessoaEmpid=this.val()},val:function(){return gx.fn.getControlValue("RENEGOCIACAODISPESSOAEMPID")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKRENEGOCIACAODISPESSOAID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Renegociacaodispessoaid,isvalid:null,rgrid:[this.Gridtrenegociacaodis_contaContainer],fld:"RENEGOCIACAODISPESSOAID",gxz:"Z11108RenegociacaoDisPessoaId",gxold:"O11108RenegociacaoDisPessoaId",gxvar:"A11108RenegociacaoDisPessoaId",ucs:[],op:[49],ip:[49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11108RenegociacaoDisPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11108RenegociacaoDisPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("RENEGOCIACAODISPESSOAID",gx.O.A11108RenegociacaoDisPessoaId,0)},c2v:function(){gx.O.A11108RenegociacaoDisPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("RENEGOCIACAODISPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKRENEGOCIACAODISPESSOANOME", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RENEGOCIACAODISPESSOANOME",gxz:"Z11113RenegociacaoDisPessoaNome",gxold:"O11113RenegociacaoDisPessoaNome",gxvar:"A11113RenegociacaoDisPessoaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11113RenegociacaoDisPessoaNome=Value},v2z:function(Value){gx.O.Z11113RenegociacaoDisPessoaNome=Value},v2c:function(){gx.fn.setControlValue("RENEGOCIACAODISPESSOANOME",gx.O.A11113RenegociacaoDisPessoaNome,0)},c2v:function(){gx.O.A11113RenegociacaoDisPessoaNome=this.val()},val:function(){return gx.fn.getControlValue("RENEGOCIACAODISPESSOANOME")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKRENEGOCIACAODISNUMERO", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Renegociacaodisnumero,isvalid:null,rgrid:[this.Gridtrenegociacaodis_contaContainer],fld:"RENEGOCIACAODISNUMERO",gxz:"Z11109RenegociacaoDisNumero",gxold:"O11109RenegociacaoDisNumero",gxvar:"A11109RenegociacaoDisNumero",ucs:[],op:[69,64,59],ip:[69,64,59,54,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11109RenegociacaoDisNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11109RenegociacaoDisNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("RENEGOCIACAODISNUMERO",gx.O.A11109RenegociacaoDisNumero,0)},c2v:function(){gx.O.A11109RenegociacaoDisNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("RENEGOCIACAODISNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKRENEGOCIACAODISDATAEMISSAO", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RENEGOCIACAODISDATAEMISSAO",gxz:"Z11112RenegociacaoDisDataEmissao",gxold:"O11112RenegociacaoDisDataEmissao",gxvar:"A11112RenegociacaoDisDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11112RenegociacaoDisDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11112RenegociacaoDisDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("RENEGOCIACAODISDATAEMISSAO",gx.O.A11112RenegociacaoDisDataEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11112RenegociacaoDisDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("RENEGOCIACAODISDATAEMISSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[62]={fld:"TEXTBLOCKRENEGOCIACAODISDATAHORAALT", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RENEGOCIACAODISDATAHORAALT",gxz:"Z11114RenegociacaoDisDataHoraAlt",gxold:"O11114RenegociacaoDisDataHoraAlt",gxvar:"A11114RenegociacaoDisDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11114RenegociacaoDisDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11114RenegociacaoDisDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("RENEGOCIACAODISDATAHORAALT",gx.O.A11114RenegociacaoDisDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11114RenegociacaoDisDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("RENEGOCIACAODISDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[67]={fld:"TEXTBLOCKRENEGOCIACAODISUSUARIOALT", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RENEGOCIACAODISUSUARIOALT",gxz:"Z11115RenegociacaoDisUsuarioAlt",gxold:"O11115RenegociacaoDisUsuarioAlt",gxvar:"A11115RenegociacaoDisUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11115RenegociacaoDisUsuarioAlt=Value},v2z:function(Value){gx.O.Z11115RenegociacaoDisUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("RENEGOCIACAODISUSUARIOALT",gx.O.A11115RenegociacaoDisUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11115RenegociacaoDisUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("RENEGOCIACAODISUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[72]={fld:"TABLE3",grid:0};
   GXValidFnc[75]={fld:"TITLECONTA", format:0,grid:0};
   GXValidFnc[77]={lvl:816,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:76,gxgrid:this.Gridtrenegociacaodis_contaContainer,fnc:this.Valid_Renegociacaodiscontapgrecempid,isvalid:null,rgrid:[],fld:"RENEGOCIACAODISCONTAPGRECEMPID",gxz:"Z11110RenegociacaoDisContaPgRecEmpId",gxold:"O11110RenegociacaoDisContaPgRecEmpId",gxvar:"A11110RenegociacaoDisContaPgRecEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11110RenegociacaoDisContaPgRecEmpId=Value},v2z:function(Value){gx.O.Z11110RenegociacaoDisContaPgRecEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("RENEGOCIACAODISCONTAPGRECEMPID",row || gx.fn.currentGridRowImpl(76),gx.O.A11110RenegociacaoDisContaPgRecEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11110RenegociacaoDisContaPgRecEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("RENEGOCIACAODISCONTAPGRECEMPID",row || gx.fn.currentGridRowImpl(76))},nac:gx.falseFn};
   GXValidFnc[78]={lvl:816,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:1,grid:76,gxgrid:this.Gridtrenegociacaodis_contaContainer,fnc:this.Valid_Renegociacaodiscontapgrecnumer,isvalid:null,rgrid:[],fld:"RENEGOCIACAODISCONTAPGRECNUMER",gxz:"Z11111RenegociacaoDisContaPgRecNumer",gxold:"O11111RenegociacaoDisContaPgRecNumer",gxvar:"A11111RenegociacaoDisContaPgRecNumer",ucs:[],op:[79],ip:[79,78,77],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11111RenegociacaoDisContaPgRecNumer=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11111RenegociacaoDisContaPgRecNumer=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("RENEGOCIACAODISCONTAPGRECNUMER",row || gx.fn.currentGridRowImpl(76),gx.O.A11111RenegociacaoDisContaPgRecNumer,0)},c2v:function(){gx.O.A11111RenegociacaoDisContaPgRecNumer=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("RENEGOCIACAODISCONTAPGRECNUMER",row || gx.fn.currentGridRowImpl(76),'.')},nac:gx.falseFn};
   GXValidFnc[79]={lvl:816,type:"char",len:1,dec:0,sign:false,ro:1,isacc:1,grid:76,gxgrid:this.Gridtrenegociacaodis_contaContainer,fnc:null,isvalid:null,rgrid:[],fld:"RENEGOCIACAODISCONTAPGRECPAGRE",gxz:"Z11120RenegociacaoDisContaPgRecPagRe",gxold:"O11120RenegociacaoDisContaPgRecPagRe",gxvar:"A11120RenegociacaoDisContaPgRecPagRe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A11120RenegociacaoDisContaPgRecPagRe=Value},v2z:function(Value){gx.O.Z11120RenegociacaoDisContaPgRecPagRe=Value},v2c:function(row){gx.fn.setGridComboBoxValue("RENEGOCIACAODISCONTAPGRECPAGRE",row || gx.fn.currentGridRowImpl(76),gx.O.A11120RenegociacaoDisContaPgRecPagRe)},c2v:function(){gx.O.A11120RenegociacaoDisContaPgRecPagRe=this.val()},val:function(row){return gx.fn.getGridControlValue("RENEGOCIACAODISCONTAPGRECPAGRE",row || gx.fn.currentGridRowImpl(76))},nac:gx.falseFn};
   GXValidFnc[80]={lvl:816,type:"char",len:1,dec:0,sign:false,ro:0,isacc:1,grid:76,gxgrid:this.Gridtrenegociacaodis_contaContainer,fnc:null,isvalid:null,rgrid:[],fld:"RENEGOCIACAODISCONTATIPO",gxz:"Z11119RenegociacaoDisContaTipo",gxold:"O11119RenegociacaoDisContaTipo",gxvar:"A11119RenegociacaoDisContaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11119RenegociacaoDisContaTipo=Value},v2z:function(Value){gx.O.Z11119RenegociacaoDisContaTipo=Value},v2c:function(row){gx.fn.setGridControlValue("RENEGOCIACAODISCONTATIPO",row || gx.fn.currentGridRowImpl(76),gx.O.A11119RenegociacaoDisContaTipo,0)},c2v:function(){gx.O.A11119RenegociacaoDisContaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("RENEGOCIACAODISCONTATIPO",row || gx.fn.currentGridRowImpl(76))},nac:gx.falseFn};
   GXValidFnc[81]={lvl:816,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:76,gxgrid:this.Gridtrenegociacaodis_contaContainer,fnc:null,isvalid:null,rgrid:[],fld:"RENEGOCIACAODISCONTAVALOR",gxz:"Z11116RenegociacaoDisContaValor",gxold:"O11116RenegociacaoDisContaValor",gxvar:"A11116RenegociacaoDisContaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11116RenegociacaoDisContaValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11116RenegociacaoDisContaValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("RENEGOCIACAODISCONTAVALOR",row || gx.fn.currentGridRowImpl(76),gx.O.A11116RenegociacaoDisContaValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11116RenegociacaoDisContaValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("RENEGOCIACAODISCONTAVALOR",row || gx.fn.currentGridRowImpl(76),'.',',')},nac:gx.falseFn};
   GXValidFnc[82]={lvl:816,type:"dtime",len:10,dec:5,sign:false,ro:0,isacc:1,grid:76,gxgrid:this.Gridtrenegociacaodis_contaContainer,fnc:null,isvalid:null,rgrid:[],fld:"RENEGOCIACAODISCONTADATAHORAAL",gxz:"Z11117RenegociacaoDisContaDataHoraAl",gxold:"O11117RenegociacaoDisContaDataHoraAl",gxvar:"A11117RenegociacaoDisContaDataHoraAl",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11117RenegociacaoDisContaDataHoraAl=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11117RenegociacaoDisContaDataHoraAl=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("RENEGOCIACAODISCONTADATAHORAAL",row || gx.fn.currentGridRowImpl(76),gx.O.A11117RenegociacaoDisContaDataHoraAl,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11117RenegociacaoDisContaDataHoraAl=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("RENEGOCIACAODISCONTADATAHORAAL",row || gx.fn.currentGridRowImpl(76))},nac:gx.falseFn};
   GXValidFnc[83]={lvl:816,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:76,gxgrid:this.Gridtrenegociacaodis_contaContainer,fnc:null,isvalid:null,rgrid:[],fld:"RENEGOCIACAODISCONTAUSUARIOALT",gxz:"Z11118RenegociacaoDisContaUsuarioAlt",gxold:"O11118RenegociacaoDisContaUsuarioAlt",gxvar:"A11118RenegociacaoDisContaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11118RenegociacaoDisContaUsuarioAlt=Value},v2z:function(Value){gx.O.Z11118RenegociacaoDisContaUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("RENEGOCIACAODISCONTAUSUARIOALT",row || gx.fn.currentGridRowImpl(76),gx.O.A11118RenegociacaoDisContaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11118RenegociacaoDisContaUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("RENEGOCIACAODISCONTAUSUARIOALT",row || gx.fn.currentGridRowImpl(76))},nac:gx.falseFn};
   GXValidFnc[89]={fld:"PROMPT_11107_11108",grid:815};
   this.A11107RenegociacaoDisPessoaEmpid = "" ;
   this.Z11107RenegociacaoDisPessoaEmpid = "" ;
   this.O11107RenegociacaoDisPessoaEmpid = "" ;
   this.A11108RenegociacaoDisPessoaId = 0 ;
   this.Z11108RenegociacaoDisPessoaId = 0 ;
   this.O11108RenegociacaoDisPessoaId = 0 ;
   this.A11113RenegociacaoDisPessoaNome = "" ;
   this.Z11113RenegociacaoDisPessoaNome = "" ;
   this.O11113RenegociacaoDisPessoaNome = "" ;
   this.A11109RenegociacaoDisNumero = 0 ;
   this.Z11109RenegociacaoDisNumero = 0 ;
   this.O11109RenegociacaoDisNumero = 0 ;
   this.A11112RenegociacaoDisDataEmissao = gx.date.nullDate() ;
   this.Z11112RenegociacaoDisDataEmissao = gx.date.nullDate() ;
   this.O11112RenegociacaoDisDataEmissao = gx.date.nullDate() ;
   this.A11114RenegociacaoDisDataHoraAlt = gx.date.nullDate() ;
   this.Z11114RenegociacaoDisDataHoraAlt = gx.date.nullDate() ;
   this.O11114RenegociacaoDisDataHoraAlt = gx.date.nullDate() ;
   this.A11115RenegociacaoDisUsuarioAlt = "" ;
   this.Z11115RenegociacaoDisUsuarioAlt = "" ;
   this.O11115RenegociacaoDisUsuarioAlt = "" ;
   this.Z11110RenegociacaoDisContaPgRecEmpId = "" ;
   this.O11110RenegociacaoDisContaPgRecEmpId = "" ;
   this.Z11111RenegociacaoDisContaPgRecNumer = 0 ;
   this.O11111RenegociacaoDisContaPgRecNumer = 0 ;
   this.Z11120RenegociacaoDisContaPgRecPagRe = "" ;
   this.O11120RenegociacaoDisContaPgRecPagRe = "" ;
   this.Z11119RenegociacaoDisContaTipo = "" ;
   this.O11119RenegociacaoDisContaTipo = "" ;
   this.Z11116RenegociacaoDisContaValor = 0 ;
   this.O11116RenegociacaoDisContaValor = 0 ;
   this.Z11117RenegociacaoDisContaDataHoraAl = gx.date.nullDate() ;
   this.O11117RenegociacaoDisContaDataHoraAl = gx.date.nullDate() ;
   this.Z11118RenegociacaoDisContaUsuarioAlt = "" ;
   this.O11118RenegociacaoDisContaUsuarioAlt = "" ;
   this.A11110RenegociacaoDisContaPgRecEmpId = "" ;
   this.A11111RenegociacaoDisContaPgRecNumer = 0 ;
   this.A11120RenegociacaoDisContaPgRecPagRe = "" ;
   this.A11119RenegociacaoDisContaTipo = "" ;
   this.A11116RenegociacaoDisContaValor = 0 ;
   this.A11117RenegociacaoDisContaDataHoraAl = gx.date.nullDate() ;
   this.A11118RenegociacaoDisContaUsuarioAlt = "" ;
   this.A11107RenegociacaoDisPessoaEmpid = "" ;
   this.A11108RenegociacaoDisPessoaId = 0 ;
   this.A11109RenegociacaoDisNumero = 0 ;
   this.A11113RenegociacaoDisPessoaNome = "" ;
   this.A11112RenegociacaoDisDataEmissao = gx.date.nullDate() ;
   this.A11114RenegociacaoDisDataHoraAlt = gx.date.nullDate() ;
   this.A11115RenegociacaoDisUsuarioAlt = "" ;
   this.Events = {"e11fz815_client": ["ENTER", true] ,"e12fz815_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_11107_11108", [39,44]);
   this.setPrompt("PROMPT_11110_11111", [77,78]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new trenegociacaodis());
